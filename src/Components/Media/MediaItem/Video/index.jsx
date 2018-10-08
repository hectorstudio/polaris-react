import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import videojs from 'video.js';

import UPDATE_PLAYSTATE from 'Mutations/updatePlaystate';

require('@silvermine/videojs-chromecast')(videojs);

class Video extends Component {
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

    this.player.on('timeupdate', () => {
      const playtime = this.player.currentTime();

      if ((Math.round(playtime % 5)) === 0) {
        this.playStateMutation(Math.floor(playtime));
      }
    });

    if (resume) {
      this.player.currentTime(playState.playtime - 5);
    } else {
      this.player.currentTime(0);
    }
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
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
