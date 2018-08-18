import React from 'react'
import FetchMovieList from 'Queries/fetchMovieList'
import Empty from 'Components/Media/Card/Empty'

import Header from 'Components/Media/Library/LibraryHeader'

import { LibraryWrap, LibraryListWrap } from '../Styles'

const MovieList = () => (
    <LibraryWrap>
        <Header heading="Movies" button="Add Movies"/>
        
        <LibraryListWrap>
            <FetchMovieList />
            <Empty length="10"/>
        </LibraryListWrap>
    </LibraryWrap>
)

export default MovieList