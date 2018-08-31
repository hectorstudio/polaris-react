import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { getBaseUrl, generateMediaUrl } from 'Helpers';

import { CardPoster, CardWrap, CardTitle } from './Styles';

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
      const { history, name, posterPath } = this.props;
      const { url } = this.state;

      return (
        <CardWrap onClick={() => { history.push(url); }}>
          <CardPoster bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${posterPath}`} alt={name} />
          <CardTitle>{name}</CardTitle>
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
