import React from 'react'

import { LibraryWrap, LibraryListWrap, LibraryHeading } from '../Styles'
import FetchSeries from 'Queries/fetchSeries'

const SeriesList = () => (
    <LibraryWrap>
        <LibraryHeading>Television Series</LibraryHeading>

        <LibraryListWrap>
            <FetchSeries />
        </LibraryListWrap>
    </LibraryWrap>
)

export default SeriesList