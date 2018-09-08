import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import LazyLoad from 'react-lazyload';
import { faPlay } from '@fortawesome/pro-solid-svg-icons';
import { getBaseUrl, generateMediaUrl } from 'Helpers';


import {
  CardPoster,
  CardWrap,
  Unwatched,
  PlayState,
  CardTitle,
  CardPopup,
  AutoPlay,
  AutoPlayIcon,
} from './Styles';

class Media extends Component {
    state = {
      url: '',
    }

    componentDidMount() {
      const { type, uuid, name } = this.props;

      this.setState({
        url: generateMediaUrl(type, uuid, name),
      });
    }

    unwatched = (playState, type) => {
      let unwatched = false;

      if (type === 'movie') {
        if (!playState.finished) {
          unwatched = true;
        }
      }

      return unwatched;
    }

    playState = (playtime) => {
      let playPosition = false;
      if (playtime > 0) {
        playPosition = true;
      }

      return playPosition;
    }

    playPosition = (length, playtime) => ((playtime * 60) / length) * 100;

    title = (type) => {
      let title = true;

      if (type === 'movie' || type === 'series') {
        title = false;
      }

      return title;
    }

    gotoMedia = (e, url, history) => {
      history.push(url);
    }

    autoPlay = (e, url, history) => {
      e.stopPropagation();
      history.push(`${url}?autoplay=true`);
    }

    render() {
      const {
        history,
        name,
        posterPath,
        type,
        playState,
        length,
      } = this.props;
      const { url } = this.state;

      return (
        <CardWrap onClick={(e) => { this.gotoMedia(e, url, history); }}>
          <LazyLoad height={230} debounce={100} overflow resize>
            <CardPoster bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${posterPath}`} alt={name}>
              { this.title(type) && <CardTitle>{name}</CardTitle> }
              { this.unwatched(playState, type) && <Unwatched /> }
              { this.playState(playState.playtime) && <PlayState percent={this.playPosition(length, playState.playtime)} /> }
            </CardPoster>
          </LazyLoad>
          <CardPopup>
            <AutoPlay onClick={(e) => { this.autoPlay(e, url, history); }}>
              <AutoPlayIcon icon={faPlay} />
            </AutoPlay>
          </CardPopup>
        </CardWrap>
      );
    }
}

Media.propTypes = {
  name: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  playState: PropTypes.shape({
    finished: PropTypes.bool,
    playtime: PropTypes.number,
  }).isRequired,
  length: PropTypes.number,
  history: ReactRouterPropTypes.history.isRequired,
};

Media.defaultProps = {
  length: 0,
};

export default Media;
