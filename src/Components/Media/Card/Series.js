import React, { Component } from 'react'
import base_url from 'Helpers/getBaseUrl'

import { CardPoster, CardWrap } from './Styles';

class Movie extends Component {
    state = {
        url: ''
    }

    componentDidMount() {
        let url = this.props.name.replace(/\s+/g, '-').toLowerCase();

        this.setState({
            url: `/series/${this.props.uuid}/${url}`
        })
    }

    render() {
        const { name, poster_path, tmdb_id, history } = this.props;

        return (
            <CardWrap data-tmdb-id={tmdb_id} onClick={() => { history.push(this.state.url) }}>
                <CardPoster src={`${base_url()}/m/images/tmdb/w342/${poster_path}`} alt={name} />
                <h5>{name}</h5>
            </CardWrap>
        )
    }
}

export default Movie;