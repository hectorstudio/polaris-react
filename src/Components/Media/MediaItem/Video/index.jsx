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
    const { uuid, length, mutate } = this.props;
    const finished = playtime * (100 / length) > 98;

    console.log(uuid, playtime, finished)

    mutate({
      variables: { uuid, playtime, finished },
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
};

export default Video = graphql(UPDATE_PLAYSTATE)(Video);
