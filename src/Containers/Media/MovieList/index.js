import React from 'react';

import { LibraryWrap, LibraryListWrap, LibraryHeading } from '../Styles'
import FetchMovieList from 'Queries/fetchMovieList'

const MovieList = () => (
    <LibraryWrap>
        <LibraryHeading>Movies</LibraryHeading>
        
        <LibraryListWrap>
            <FetchMovieList />
        </LibraryListWrap>
    </LibraryWrap>
)

export default MovieList