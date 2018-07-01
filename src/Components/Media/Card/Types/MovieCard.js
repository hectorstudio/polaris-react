import React, { Component } from 'react'
import { getBaseUrl } from 'Helpers'

import { CardPoster, CardWrap } from '../Styles';

class MovieCard extends Component {
    state = {
        url: ''
    }

    componentDidMount() {
        let url = this.props.title.replace(/\s+/g, '-').toLowerCase();

        this.setState({
            url: `/movie/${this.props.uuid}/${url}`
        })
    }

    render() { 
        const { title, poster_path, imdb_id, history } = this.props;


        return ( 
            <CardWrap data-tmdb-id={imdb_id} onClick={() => { history.push(this.state.url) }}>
                <CardPoster src={`${getBaseUrl()}/m/images/tmdb/w342/${poster_path}`} alt={title} />
                <h5>{title}</h5>
            </CardWrap>
        )
    }
}
 
export default MovieCard;