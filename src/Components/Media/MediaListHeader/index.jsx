import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { compileEpisodes, generateMediaUrl } from 'Helpers';

import { faPlay, faRandom } from "@fortawesome/free-solid-svg-icons";
import { Header, HeaderIconWrap, HeaderIcon } from './Styles';

class MediaListHeader extends Component {
  state = {
    episodes: [],
    nextEpisode: {},
    randomEpisode: {}
  }

  componentDidMount = () => {
    const { data, type } = this.props;

    const episodes = (type === 'series' ? data : compileEpisodes(data));
    const randomize = Math.floor(Math.random()*(episodes.length + 1));
    
    let nextEpisode;

    for (let el of episodes) {
      console.log(el);
      if (!el.playState.finished) {
        nextEpisode = el;

        break;
      }
    }

    this.setState({
      episodes,
      nextEpisode,
      randomEpisode: episodes[randomize]
    });
  }

  playEpisode = (uuid, resume) => {
    const { history } = this.props;

    history.push({
      pathname: generateMediaUrl('episode', uuid),
      state: { 
        resume,
        autoplay: true
      },
    });
  }
  
  playSeries = () => {
    const { nextEpisode } = this.state;
    const resume = (nextEpisode.playState.playtime > 0 ? true : false);

    this.playEpisode(nextEpisode.uuid, resume);
  }

  playRandomEpisode = () => {
    const { randomEpisode } = this.state;
    const resume = (randomEpisode.playState.playtime > 0 ? true : false);

    this.playEpisode(randomEpisode.uuid, resume);
  }

  render() {
    return (
      <Header>
        <HeaderIconWrap onClick={this.playSeries}>
          <HeaderIcon icon={faPlay} />
        </HeaderIconWrap>

        <HeaderIconWrap onClick={this.playRandomEpisode}>
          <HeaderIcon icon={faRandom} />
        </HeaderIconWrap>
      </Header>
    );
  }
}

MediaListHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    playState:PropTypes.shape({
      finished: PropTypes.bool.isRequired,
      playtime: PropTypes.number.isRequired
    })
  })).isRequired,
  type: PropTypes.string.isRequired
};

export default withRouter(MediaListHeader);
