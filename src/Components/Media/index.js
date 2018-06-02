import React from 'react'
import styled from 'styled-components'

const MediaListWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Heading = styled.h1`
    font-size: 2rem;
    color: #000;
    text-transform: capitalize;
`;

const MediaList = ({ match }) => {
    

    return (
        <MediaListWrap>
            <Heading>{match.params.name}</Heading>
        </MediaListWrap>
    );
}

export default MediaList;
