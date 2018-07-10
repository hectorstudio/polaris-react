import React from 'react'
import FetchMovieList from 'Queries/fetchMovieList'
import Empty from 'Components/Media/Card/Empty'

// Local Styles
import { LibraryWrap, LibraryListWrap } from '../Styles'
// Global Styles
import { PageHeading } from 'Helpers/Styles'

const MovieList = () => (
    <LibraryWrap>
        <PageHeading>Movies</PageHeading>
        
        <LibraryListWrap>
            <FetchMovieList />
            <Empty length="10"/>
        </LibraryListWrap>
    </LibraryWrap>
)

export default MovieList