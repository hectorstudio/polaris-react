import React from 'react'
import styled from 'styled-components'

import LibraryList from '../Components/Librarys'

const SidebarWrapper = styled.section`
    flex: 1 1 250px;
    min-width: 250px;
    max-width: 250px;
    padding: 1rem;
    background: #EEE;
`;

const SideBar = () => (
    <SidebarWrapper>
        <LibraryList />
    </SidebarWrapper>
)

export default SideBar