import React from 'react'
import styled from 'styled-components'

import Routes from './Routes'

const ContentWrap = styled.section`
    flex: 1 1 auto;
    padding: 1rem;
    overflow-y: auto;
    height:100vh;
`;

const Content = () => (
    <ContentWrap>
        <Routes />
    </ContentWrap>
)

export default Content