import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Unwatched,
  UnwatchedCount,
  PlayState,
} from './Styles';

export default class MediaInfo extends Component {
  playPosition = (length, playtime) => ((playtime * 60) / length) * 100;

  mediaState = () => {
    const {
      length,
      playState,
      showPlayStatus,
      unwatchedEpisodesCount,
      size,
    } = this.props;

    const watchStatus = () => {
      if (showPlayStatus) {
        return (
          <React.Fragment>
            { !playState.finished && <Unwatched /> }
            { !playState.finished && playState.playtime > 0
              && <PlayState percent={this.playPosition(length, playState.playtime)} />
            }
          </React.Fragment>
        );
      }

      if (unwatchedEpisodesCount > 0 && size !== 'large') {
        return <UnwatchedCount>{unwatchedEpisodesCount}</UnwatchedCount>;
      }

      return false;
    };

    return (
      <React.Fragment>
        { watchStatus() }
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        { this.mediaState() }
      </React.Fragment>
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
    finished: true,
    playtime: 0,
  },
};
