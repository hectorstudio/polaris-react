import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { graphql } from 'react-apollo';
import videojs from 'video.js';

import UPDATE_PLAYSTATE from 'Mutations/updatePlaystate';
import { mutatePlayStateEpisode, mutatePlayStateMovie } from './mutatePlayState';

require('@silvermine/videojs-chromecast')(videojs);

class Video extends Component {
  t = throttle(() => this.playStateMutation(Math.floor(this.player.currentTime())), 2000);

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
      this.t();
    });

    if (resume) {
      this.player.currentTime(playState.playtime - 5);
    } else {
      this.player.currentTime(0);
    }
  }

  componentWillUnmount() {
    this.t.cancel();

    if (this.player) {
      this.player.dispose();
    }
  }

  playStateMutation = (playtime) => {
    const {
      uuid,
      length,
      mutate,
      type,
    } = this.props;
    const finished = playtime * (100 / length) > 98;

    if (type === 'Episode') {
      mutatePlayStateEpisode(mutate, uuid, playtime, finished);
    } else {
      mutatePlayStateMovie(mutate, uuid, playtime, finished);
    }
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
  type: PropTypes.string.isRequired,
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
