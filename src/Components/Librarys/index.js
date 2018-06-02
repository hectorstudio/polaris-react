import React from 'react'
import styled from 'styled-components'

import LibraryList from './LibraryList'

const Heading = styled.h3`
    font-size: 1.4rem;
    color: #000;
`;

const LibrariesWrap = styled.section`
    
`;

const Librarys = () => (
    <LibrariesWrap id="libraries">
        <Heading>Libraries</Heading>
        <LibraryList />
    </LibrariesWrap>
)

export default Librarys