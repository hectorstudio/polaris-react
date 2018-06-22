import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { CardWrap, CardPoster } from './Styles'

class MovieCard extends Component {
    render() { 
        const { title, poster_path, imdb_id, uuid, history } = this.props;

        let url = title.replace(/\s+/g, '-').toLowerCase();
        
        let url_data = {
            pathname: `/movies/${uuid}/${url}`
        };

        return ( 
            <CardWrap data-tmdb-id={imdb_id} onClick={() => { history.push(url_data) }}>
                <CardPoster src={`http://atalanta.bysh.me:8080/m/images/tmdb/w342/${poster_path}`} alt={title} />
                <h5>{title}</h5>
            </CardWrap>
        )
    }
}
 
export default withRouter(MovieCard);