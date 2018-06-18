import React from 'react';

import { LibraryWrap, LibraryListWrap, LibraryHeading } from '../Styles'

import FetchMovies from 'Actions/fetchMovies'

const Movies = () => (
    <LibraryWrap>
        <LibraryHeading>Movies</LibraryHeading>
        
        <LibraryListWrap>
            <FetchMovies />
        </LibraryListWrap>
    </LibraryWrap>
)

export default Movies