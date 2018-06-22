import React from 'react';

import { LibraryWrap, LibraryListWrap, LibraryHeading } from '../Styles'
import FetchMovies from 'Queries/fetchMovies'

const MovieList = () => (
    <LibraryWrap>
        <LibraryHeading>Movies</LibraryHeading>
        
        <LibraryListWrap>
            <FetchMovies />
        </LibraryListWrap>
    </LibraryWrap>
)

export default MovieList