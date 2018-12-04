import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Unwatched,
  UnwatchedCount,
  PlayState,
} from './Styles';

export default class MediaInfo extends Component {
  playPosition = (length, playtime) => (playtime * (100 / length));

  mediaState = () => {
    const {
      length,
      playState,
      showPlayStatus,
      unwatchedEpisodesCount,
      size,
    } = this.props;

    const watchStatus = () => {
      console.log(playState.playtime);
      console.log(length)
      if (showPlayStatus) {
        return (
          <Fragment>
            { !playState.finished && <Unwatched /> }
            { !playState.finished && playState.playtime > 0
              && <PlayState percent={this.playPosition(length, playState.playtime)} />
            }
          </Fragment>
        );
      }

      if (unwatchedEpisodesCount > 0 && size !== 'large') {
        return <UnwatchedCount>{unwatchedEpisodesCount}</UnwatchedCount>;
      }

      return false;
    };

    return (
      <Fragment>
        { watchStatus() }
      </Fragment>
    );
  };

  render() {
    return (
      <Fragment>
        { this.mediaState() }
      </Fragment>
    );
  }
}

MediaInfo.propTypes = {
  showPlayStatus: PropTypes.bool.isRequired,
  unwatchedEpisodesCount: PropTypes.number,
  length: PropTypes.number,
  size: PropTypes.string,
  playState: PropTypes.shape({
    finished: PropTypes.bool,
    playtime: PropTypes.number,
  }),
};

MediaInfo.defaultProps = {
  length: 0,
  unwatchedEpisodesCount: 0,
  size: 'small',
  playState: {
    finished: false,
    playtime: 0,
  },
};
