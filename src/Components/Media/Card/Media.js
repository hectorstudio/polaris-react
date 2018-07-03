import React, { Component } from 'react'
import { getBaseUrl } from 'Helpers'

import { CardPoster, CardWrap } from './Styles';

class Media extends Component {
    state = {
        name: (this.props.name ? this.props.name : this.props.title)
    }

    componentDidMount() {
        const { type, uuid } = this.props;

        let url = this.state.name.replace(/\s+/g, '-').toLowerCase();

        this.setState({
            url: `/${type}/${uuid}/${url}`
        });
    }

    render() {
        const { poster_path, imdb_id, history } = this.props;
        const { name } = this.state;

        return (
            <CardWrap data-tmdb-id={imdb_id} onClick={() => { history.push(this.state.url) }}>
                <CardPoster src={`${getBaseUrl()}/m/images/tmdb/w342/${poster_path}`} alt={name} />
                <h5>{name}</h5>
            </CardWrap>
        )
    }
}

export default Media;