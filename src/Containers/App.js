import React, { Component } from 'react'

import { Auth, checkAuth } from 'Client/Auth'
import { AppWrap, ContentWrap } from './Styles'

import Sidebar from 'Components/Sidebar'
import Header from 'Components/Header'
import Routes from 'Routes'

export default class App extends Component {
    render() {
        checkAuth();

        const LoggedIn = () => (
            <React.Fragment>
                <Sidebar />
                <ContentWrap>
                    <Header />
                    <Routes />
                </ContentWrap>
            </React.Fragment>
        )

        return (
            <AppWrap authed={Auth.isAuthenticated}>
                {(Auth.isAuthenticated ? <LoggedIn /> : <Routes />)}
            </AppWrap>
        );
    }
}
