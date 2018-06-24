import React, { Component } from 'react'
import base_url from 'Helpers/getBaseUrl'

import { CardPoster, CardWrap } from './Styles';

class Movie extends Component {
    state = {
        url: ''
    }

    componentDidMount() {
        let url = this.props.title.replace(/\s+/g, '-').toLowerCase();

        this.setState({
            url: `/movies/${this.props.uuid}/${url}`
        })
    }

    render() { 
        const { title, poster_path, imdb_id, history } = this.props;


        return ( 
            <CardWrap data-tmdb-id={imdb_id} onClick={() => { history.push(this.state.url) }}>
                <CardPoster src={`${base_url()}/m/images/tmdb/w342/${poster_path}`} alt={title} />
                <h5>{title}</h5>
            </CardWrap>
        )
    }
}
 
export default Movie;