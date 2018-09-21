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
    const { onClick } = this.props;

    if (onClick) {
      onClick();
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
      posterPath,
      stillPath,
      type,
      size,
      files,
    } = this.props;
    const { url } = this.state;

    const showPlayStatus = (type === 'Movie' || type === 'Episode');
    const length = files[0].totalDuration;

    return (
      <CardWrap onClick={e => (this.cardClick(e, url, history))} size={size}>
        <LazyLoad height={230} debounce={100} overflow resize>
          <CardPoster bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${(posterPath || stillPath)}`} alt={name}>
            <MediaInfo {...this.props} length={length} showPlayStatus={showPlayStatus} />
          </CardPoster>
        </LazyLoad>
        <CardPopup>
          <PopupLink onClick={e => (this.autoPlay(e, url, history))}>
            <PopupIcon icon={(showPlayStatus ? faPlay : faSearch)} />
          </PopupLink>
        </CardPopup>
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
  name: PropTypes.string.isRequired,
  posterPath: requiredPropsCheck,
  stillPath: requiredPropsCheck,
  type: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.shape({
    totalDuration: PropTypes.number,
  })),
  history: ReactRouterPropTypes.history.isRequired,
  size: PropTypes.string,
};

Media.defaultProps = {
  size: 'small',
  posterPath: null,
  stillPath: null,
  files: [
    {
      totalDuration: 0,
    },
  ],
};

export default Media;
