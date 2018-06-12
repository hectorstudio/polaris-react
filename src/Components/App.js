import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import styled from 'styled-components'

import Routes from 'Routes'

const AppWrap = styled.main`
    display:flex;
    height: 100vh;
`;

class App extends Component {
    render() {
        return (
            <AppWrap id="bytesized-streaming">
                <Routes />
            </AppWrap>
        );
    }
}

export default withAlert(App)
