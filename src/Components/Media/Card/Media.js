import React, { Component } from 'react';
import { getBaseUrl, generateMediaUrl } from 'Helpers';

import { CardPoster, CardWrap, CardTitle } from './Styles';

class Media extends Component {
    state = {
      name: (this.props.name ? this.props.name : this.props.title),
    }

    componentDidMount() {
      const { type, uuid } = this.props;

      this.setState({
        url: generateMediaUrl(type, uuid, this.state.name),
      });
    }

    render() {
      const { poster_path, imdb_id, history } = this.props;
      const { name } = this.state;

      return (
        <CardWrap data-tmdb-id={imdb_id} onClick={() => { history.push(this.state.url); }}>
          <CardPoster bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${poster_path}`} alt={name} />
          <CardTitle>{name}</CardTitle>
        </CardWrap>
      );
    }
}

export default Media;
