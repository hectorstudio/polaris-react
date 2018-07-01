import React from 'react';

import { LibraryWrap, LibraryListWrap, LibraryHeading } from '../Styles'
import FetchSeriesList from 'Queries/fetchSeriesList'

const SeriesList = () => (
    <LibraryWrap>
        <LibraryHeading>TV Series</LibraryHeading>

        <LibraryListWrap>
            <FetchSeriesList />
        </LibraryListWrap>
    </LibraryWrap>
)

export default SeriesList