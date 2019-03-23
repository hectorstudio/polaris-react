import React, { Component } from 'react';
import { compose } from 'lodash/fp';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { compileEpisodes, generateMediaUrl } from 'Helpers';
import { showModal } from 'Redux/Actions/modalActions';
import UPDATE_PLAYSTATE from 'Mutations/updatePlaystate';
import {
  updatePlayStateSeries,
  updatePlayStateSeason,
} from 'Components/Media/Actions/updatePlayState';

import { faPlay, faRandom, faCheckCircle as faCheckCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Header, HeaderIconWrap, HeaderIcon } from './Styles';

class MediaListHeader extends Component {
  state = {
    episodes: [],
    nextEpisode: {},
    randomEpisode: {},
    finished: false,
  };

  componentWillMount = () => {
    this.updateEpisodeList();
  };

  componentDidMount = () => {
    this.finished();
  }

  updateEpisodeList = () => {
    const { data, type } = this.props;
    const episodes = type === 'series' ? compileEpisodes(data) : data;
    const randomize = Math.floor(Math.random() * (episodes.length + 1));

    let nextEpisode;

    for (const el of episodes) {
      if (!el.playState.finished) {
        nextEpisode = el;

        break;
      }
    }

    this.setState({
      episodes,
      nextEpisode,
      randomEpisode: episodes[randomize],
    });
  }

  finished = () => {
    const { episodes } = this.state;
    let fin = true;

    episodes.forEach((episode) => {
      if (!episode.playState.finished) fin = false;
    });

    this.setState({ finished: fin });
  };

  playEpisode = (uuid, resume) => {
    const { history } = this.props;

    history.push({
      pathname: generateMediaUrl('episode', uuid),
      state: {
        resume,
        autoplay: true,
      },
    });
  };

  playSeries = () => {
    const { nextEpisode } = this.state;
    const resume = nextEpisode.playState.playtime > 0;

    this.playEpisode(nextEpisode.uuid, resume);
  };

  playRandomEpisode = () => {
    const { randomEpisode } = this.state;
    const resume = randomEpisode.playState.playtime > 0;

    this.playEpisode(randomEpisode.uuid, resume);
  };

  markAsWatched = () => {
    const { episodes, finished } = this.state;
    const { mutate, uuid, type } = this.props;

    episodes.forEach((episode) => {
      if (type === 'series') {
        updatePlayStateSeries(mutate, uuid, episode.uuid, !finished);
      } else {
        updatePlayStateSeason(mutate, uuid, episode.uuid, !finished);
      }
    });

    this.setState({
      finished: !finished,
    });
  };

  render() {
    const { finished } = this.state;

    return (
      <Header>
        <HeaderIconWrap onClick={this.playSeries}>
          <HeaderIcon icon={faPlay} />
        </HeaderIconWrap>

        <HeaderIconWrap onClick={this.playRandomEpisode}>
          <HeaderIcon icon={faRandom} />
        </HeaderIconWrap>

        <HeaderIconWrap onClick={this.markAsWatched}>
          <HeaderIcon
            icon={finished ? faCheckCircleSolid : faCheckCircle}
          />
        </HeaderIconWrap>
      </Header>
    );
  }
}

MediaListHeader.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      playState: PropTypes.shape({
        finished: PropTypes.bool.isRequired,
        playtime: PropTypes.number.isRequired,
      }),
    }),
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired,
  uuid: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  showModal: (type, props) => dispatch(showModal(type, props)),
});

export default compose(
  withRouter,
  graphql(UPDATE_PLAYSTATE),
  connect(null, mapDispatchToProps),
)(MediaListHeader);
