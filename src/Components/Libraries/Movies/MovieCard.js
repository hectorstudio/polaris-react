import React from 'react'
import styled from 'styled-components'

const MovieWrap = styled.article`
    flex: 1 1 20%;
    max-width: 20%;
    padding: 10px;
    box-sizing:border-box;
`;

const Poster = styled.img`
    width: 100%;
    float: left;
`;

const MovieCard = ( {title, poster_path, imdb_id} ) => {
    return (
        <MovieWrap data-tmdb-id={imdb_id}>
            <Poster src={`http://atalanta.bysh.me:8282/images/tmdb/w342/${poster_path}`} alt={title} />
            <h5>{title}</h5>
        </MovieWrap>
    )
}

export default MovieCard