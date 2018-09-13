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
      showPlayStatus,
      unwatchedEpisodesCount,
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

      if (unwatchedEpisodesCount > 0) {
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
    const { type, name } = this.props;

    return (
      <React.Fragment>
        {((type === 'Season' || type === 'Episode') && <CardTitle>{name}</CardTitle>)}
        { this.mediaState() }
      </React.Fragment>
    );
  }
}

MediaInfo.propTypes = {
  name: PropTypes.string.isRequired,
  showPlayStatus: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  unwatchedEpisodesCount: PropTypes.number,
  length: PropTypes.number,
  playState: PropTypes.shape({
    finished: PropTypes.bool,
    playtime: PropTypes.number,
  }),
};

MediaInfo.defaultProps = {
  length: 0,
  unwatchedEpisodesCount: 0,
  playState: {
    finished: true,
    playtime: 0,
  },
};
