import React, { Component } from 'react'
import styled from 'styled-components'

import FetchMovies from '../../Querys/Movies'

const MovieListWrapper = styled.section`
    display:flex;
    flex-wrap: wrap;
`;

class Movies extends Component {
    render() {
        return (
            <MovieListWrapper>
                <FetchMovies />
            </MovieListWrapper>
        );
    }
}

export default Movies;
