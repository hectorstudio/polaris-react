import React from 'react';
import FetchSeriesList from 'Queries/fetchSeriesList'

// Local Styles
import { LibraryWrap, LibraryListWrap } from '../Styles'
// Global Styles
import { PageHeading } from 'Helpers/Styles'

const SeriesList = () => (
    <LibraryWrap>
        <PageHeading>Series</PageHeading>

        <LibraryListWrap>
            <FetchSeriesList />
        </LibraryListWrap>
    </LibraryWrap>
)

export default SeriesList