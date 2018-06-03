import React from 'react'
import styled from 'styled-components'

import Movies from './Movies'
import Series from './Series'

const LibraryWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Heading = styled.h1`
    font-size: 2rem;
    color: #000;
    text-transform: capitalize;
`;

const Library = ({ match }) => {
    return (
        <LibraryWrap>
            <Heading>{match.params.name}</Heading>
            { match.params.name === 'movies' ? <Movies /> : <Series /> }
        </LibraryWrap>
    );
}

export default Library;
