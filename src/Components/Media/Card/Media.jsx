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

    unwatched = () => {
      const { playState, type } = this.props;
      let unwatched;

      if (type === 'movie') {
        if (playState.finished) {
          unwatched = false;
        } else {
          unwatched = true;
        }
      } else {
        unwatched = false;
      }

      return unwatched;
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
      } = this.props;
      const { url } = this.state;

      let title = true;

      if (type === 'movie' || type === 'series') {
        title = false;
      }

      return (
        <CardWrap onClick={(e) => { this.gotoMedia(e, url, history); }}>
          <LazyLoad height={230} debounce={100} overflow resize>
            <CardPoster bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${posterPath}`} alt={name} />
          </LazyLoad>
          { title
            && <CardTitle>{name}</CardTitle>
          }
          { this.unwatched()
            && <Unwatched />
          }
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
  history: ReactRouterPropTypes.history.isRequired,
};

export default Media;
