import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import videojs from 'video.js';

import UPDATE_PLAYSTATE from 'Mutations/updatePlaystate';

require('@silvermine/videojs-chromecast')(videojs);

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playstateIntervalId: {},
    };
  }

  componentDidMount() {
    const { resume, playState } = this.props;

    this.player = videojs(this.videoNode, {
      ...this.props,
      controls: true,
      html5: {
        nativeAudioTracks: false,
      },
    },
    function onPlayerReady() {
      this.chromecast();
    });

    if (resume) {
      this.player.currentTime(playState.playtime);
    } else {
      this.player.currentTime(0);
    }

    const updatePlayState = setInterval(() => {
      const playtime = Math.round(this.player.currentTime());
      this.playStateMutation(playtime);
    }, 2000);

    this.setState({ playstateIntervalId: updatePlayState });
  }

  componentWillUnmount() {
    const { playstateIntervalId } = this.state;

    if (this.player) {
      this.player.dispose();
    }

    clearInterval(playstateIntervalId);
  }

  playStateMutation = (playtime) => {
    const {
      uuid,
      length,
      mutate,
      updatePlayState,
    } = this.props;
    const finished = playtime * (100 / length) > 98;

    mutate({
      variables: { uuid, playtime: (!finished ? playtime : 0), finished },
    }).then(() => {
      updatePlayState(playtime, finished);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div data-vjs-player>
          <video ref={(node) => { this.videoNode = node; }} className="video-js" />
        </div>
      </React.Fragment>
    );
  }
}

Video.propTypes = {
  uuid: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  mutate: PropTypes.func.isRequired,
  updatePlayState: PropTypes.func.isRequired,
  playState: PropTypes.shape({
    finished: PropTypes.bool,
    playtime: PropTypes.number,
  }).isRequired,
  resume: PropTypes.bool,
};

Video.defaultProps = {
  resume: false,
};

export default Video = graphql(UPDATE_PLAYSTATE)(Video);
