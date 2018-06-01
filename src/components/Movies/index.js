import React, { Component } from 'react'
import styled from 'styled-components'

import GetMovies from '../../querys/Movies'

const MovieListWrapper = styled.section`
    display:flex;
    flex-wrap: wrap;
`;

class Movies extends Component {
    render() {
        return (
            <MovieListWrapper>
                <GetMovies />
            </MovieListWrapper>
        );
    }
}

export default Movies;
