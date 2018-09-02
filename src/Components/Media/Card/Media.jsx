import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import LazyLoad from 'react-lazyload';
import { getBaseUrl, generateMediaUrl } from 'Helpers';

import {
  CardPoster,
  CardWrap,
  CardTitle,
  CardPopup,
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
        <CardWrap onClick={() => { history.push(url); }}>
          <LazyLoad height={210} debounce={100} overflow resize>
            <CardPoster bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${posterPath}`} alt={name} />
          </LazyLoad>
          { title
            && <CardTitle>{name}</CardTitle>
          }
          <CardPopup />
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
};

export default Media;
