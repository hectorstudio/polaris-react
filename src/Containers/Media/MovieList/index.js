import React from 'react';
import FetchMovieList from 'Queries/fetchMovieList'

// Local Styles
import { LibraryWrap, LibraryListWrap } from '../Styles'
// Global Styles
import { PageHeading } from 'Helpers/Styles'

const MovieList = () => (
    <LibraryWrap>
        <PageHeading>Movies</PageHeading>
        
        <LibraryListWrap>
            <FetchMovieList />
        </LibraryListWrap>
    </LibraryWrap>
)

export default MovieList