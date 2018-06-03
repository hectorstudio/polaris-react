import React from 'react'
import styled from 'styled-components'

import FetchMovies from 'Queries/Movies'

const MoviesWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Movies = () => {
    return (
        <MoviesWrap>
            <FetchMovies />
        </MoviesWrap>
    );
}

export default Movies;
