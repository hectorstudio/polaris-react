import React, { Component } from 'react';

import { Auth, checkAuth } from 'Client/Auth';

import Sidebar from 'Components/Sidebar';
import Header from 'Components/Header';
import Routes from 'Routes';
import { AppWrap, ContentWrap } from './Styles';

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
    );

    return (
      <AppWrap authed={Auth.isAuthenticated}>
        {(Auth.isAuthenticated ? <LoggedIn /> : <Routes />)}
      </AppWrap>
    );
  }
}
