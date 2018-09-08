import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Unwatched,
  UnwatchedCount,
  PlayState,
  CardTitle,
} from './Styles';

export default class MediaInfo extends Component {
  playPosition = (length, playtime) => ((playtime * 60) / length) * 100;

  mediaState = () => {
    const {
      length,
      playState,
      type,
      unwatchedCount,
    } = this.props;

    const watchStatus = () => {
      if (type === 'movie' || type === 'episode') {
        return (
          <React.Fragment>
            { !playState.finished && <Unwatched /> }
            { !playState.finished && playState.playtime > 0
              && <PlayState percent={this.playPosition(length, playState.playtime)} />
            }
          </React.Fragment>
        );
      }

      if (unwatchedCount > 0) {
        return <UnwatchedCount>{unwatchedCount}</UnwatchedCount>;
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
    const { type, name } = this.props;

    return (
      <React.Fragment>
        { (type === 'movie' || type === 'series' || <CardTitle>{name}</CardTitle>) }
        { this.mediaState() }
      </React.Fragment>
    );
  }
}

MediaInfo.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  unwatchedCount: PropTypes.number,
  length: PropTypes.number,
  playState: PropTypes.shape({
    finished: PropTypes.bool,
    playtime: PropTypes.number,
  }),
};

MediaInfo.defaultProps = {
  length: 0,
  unwatchedCount: 0,
  playState: {
    finished: true,
    playtime: 0,
  },
};
