import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import LazyLoad from 'react-lazyload';
import { faPlay, faSearch } from '@fortawesome/pro-solid-svg-icons';
import { getBaseUrl, generateMediaUrl } from 'Helpers';

import MediaInfo from './MediaInfo';
import MediaName from './MediaName';

import {
  CardPoster,
  CardWrap,
  CardPopup,
  PosterWrap,
  PopupLink,
  PopupIcon,
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

  cardClick = (e, url, history) => {
    const { onClick, hover } = this.props;

    if (onClick) {
      onClick();
    } else if (!hover) {
      e.preventDefault();
    } else {
      history.push(url);
    }
  }

  autoPlay = (e, url, history) => {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    } else {
      history.push(`${url}?autoplay=true`);
    }

    e.stopPropagation();
  }

  render() {
    const {
      history,
      name,
      episodes,
      posterPath,
      stillPath,
      type,
      size,
      files,
      hover,
    } = this.props;
    const { url } = this.state;

    const showPlayStatus = (type === 'Movie' || type === 'Episode');
    const bgImage = (posterPath || stillPath
      ? `${getBaseUrl()}/m/images/tmdb/w342/${(posterPath || stillPath)}`
      : '/images/placeholder.png'
    );

    return (
      <CardWrap onClick={e => (this.cardClick(e, url, history))} size={size}>
        <PosterWrap>
          <LazyLoad height={(size === 'wide' ? 125 : 230)} debounce={100} overflow resize>
            <CardPoster hover={hover} size={size} bgimg={bgImage}>
              <MediaInfo
                {...this.props}
                length={files[0].totalDuration}
                showPlayStatus={showPlayStatus}
              />
            </CardPoster>
          </LazyLoad>
          {hover
            && (
              <CardPopup>
                <PopupLink onClick={e => (this.autoPlay(e, url, history))}>
                  <PopupIcon icon={(showPlayStatus ? faPlay : faSearch)} />
                </PopupLink>
              </CardPopup>
            )
          }
        </PosterWrap>
        {(!size.toLowerCase().includes('large') && (type === 'Season' || type === 'Episode')) && <MediaName name={name} episodes={episodes} /> }
      </CardWrap>
    );
  }
}

const requiredPropsCheck = (props, propName, componentName) => {
  const { posterPath, stillPath } = props;
  if (!posterPath && !stillPath) {
    return new Error(`One of 'posterPath' or 'stillPath' is required by '${componentName}' component.`);
  }

  return null;
};

Media.propTypes = {
  airDate: PropTypes.string,
  posterPath: requiredPropsCheck,
  stillPath: requiredPropsCheck,
  type: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.shape({
    totalDuration: PropTypes.number,
  })),
  history: ReactRouterPropTypes.history.isRequired,
  size: PropTypes.string,
  hover: PropTypes.bool,
};

Media.defaultProps = {
  size: 'small',
  airDate: null,
  hover: true,
  posterPath: null,
  stillPath: null,
  files: [
    {
      totalDuration: 0,
    },
  ],
};

export default Media;
