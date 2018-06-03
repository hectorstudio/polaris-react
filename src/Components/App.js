import React, { Component } from 'react'
import styled from 'styled-components'

import SideBar from './Sidebar'
import Content from './Content'

const AppWrap = styled.main`
    display:flex;
    height: 100vh;
`;

class App extends Component {   
    render() {
        return (
            <AppWrap id="bytesized-streaming">
                <SideBar />
                <Content />
            </AppWrap>
        );
    }
}

export default App;
