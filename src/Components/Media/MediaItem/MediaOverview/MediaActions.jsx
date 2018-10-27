import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import UPDATE_PLAYSTATE from 'Mutations/updatePlaystate';
import { updatePlayStateEpisode, updatePlayStateMovie } from 'Components/Media/Actions/updatePlayState';

class MediaActions extends Component {
  toggleWatchedState = () => {
    const {
      finished,
      type,
      uuid,
      mutate,
    } = this.props;

    if (type === 'Episode') {
      updatePlayStateEpisode(mutate, uuid, 0, !finished);
    } else {
      updatePlayStateMovie(mutate, uuid, 0, !finished);
    }
  }

  render() {
    const { playState, playMedia } = this.props;
    const resume = (playState.playtime > 0);

    return (
      <React.Fragment>
        <button type="button" onClick={() => this.toggleWatchedState()}>
          {(playState.finished ? 'Mark As Unwatched' : 'Mark As Watched')}
        </button>
        <button type="button" onClick={() => playMedia(false)}>
          {(resume ? 'Play From Start' : 'Play')}
        </button>
        {resume && (
          <button type="button" onClick={() => playMedia(true)}>
            Resume
          </button>
        )}
      </React.Fragment>
    );
  }
}

MediaActions.propTypes = {
  uuid: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired,
  playState: PropTypes.shape({
    finished: PropTypes.bool,
    playtime: PropTypes.number,
  }).isRequired,
  type: PropTypes.string.isRequired,
  playMedia: PropTypes.func.isRequired,
};

export default MediaActions = graphql(UPDATE_PLAYSTATE)(MediaActions);
