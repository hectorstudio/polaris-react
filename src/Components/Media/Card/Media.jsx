import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import LazyLoad from 'react-lazyload';
import { faPlay, faSearch } from '@fortawesome/pro-solid-svg-icons';
import { getBaseUrl, generateMediaUrl } from 'Helpers';

import MediaInfo from './MediaInfo';

import {
  CardPoster,
  CardWrap,
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
        onClick,
        size,
      } = this.props;
      const { url } = this.state;
      const checkType = (type === 'movie' || type === 'episode');

      return (
        <CardWrap onClick={e => (onClick || this.gotoMedia(e, url, history))} size={size}>
          <LazyLoad height={230} debounce={100} overflow resize>
            <CardPoster bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${posterPath}`} alt={name}>
              <MediaInfo {...this.props} />
            </CardPoster>
          </LazyLoad>
          <CardPopup>
            <AutoPlay onClick={e => (onClick || this.autoPlay(e, url, history))}>
              <AutoPlayIcon icon={(checkType ? faPlay : faSearch)} />
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
  history: ReactRouterPropTypes.history.isRequired,
  size: PropTypes.string,
};

Media.defaultProps = {
  size: 'small',
};

export default Media;
