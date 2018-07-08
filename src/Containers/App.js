import React, { Component } from 'react'

import { Auth, checkAuth } from 'Components/Auth'
import { AppWrap, ContentWrap } from './Styles'

import Sidebar from 'Components/Sidebar'
import Routes from 'Routes'

export default class App extends Component {
    render() {
        checkAuth();

        return (
            <AppWrap id="bytesized-streaming">
                {(Auth.isAuthenticated ? <Sidebar /> : null)}
                <ContentWrap>
                    <Routes />
                </ContentWrap>
            </AppWrap>
        );
    }
}
