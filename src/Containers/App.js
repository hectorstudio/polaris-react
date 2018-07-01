import React, { Component } from 'react'

import { Auth, checkAuth } from 'Components/Auth'
import { AppWrap } from './Styles'

import Header from 'Components/Header'
import Routes from 'Routes'

export default class App extends Component {
    render() {
        checkAuth();

        return (
            <AppWrap id="bytesized-streaming">
                {(Auth.isAuthenticated ? <Header /> : null)}
                <Routes />
            </AppWrap>
        );
    }
}
