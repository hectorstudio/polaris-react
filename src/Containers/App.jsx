import React from 'react';
import { Auth, checkAuth } from 'Client/Auth';

import BackgroundContainer from 'Components/BackgroundContainer';
import Sidebar from 'Components/Sidebar';
import Header from 'Components/Header';
import Routes from 'Routes';

import { AppWrap, PageWrap } from './Styles';

const App = () => {
  checkAuth();

  const LoggedIn = () => (
    <React.Fragment>
      <Sidebar />
      <Header />
      <PageWrap>
        <Routes />
        <BackgroundContainer />
      </PageWrap>
    </React.Fragment>
  );

  return (
    <AppWrap authed={Auth.isAuthenticated}>
      {(Auth.isAuthenticated ? <LoggedIn /> : <Routes />)}
    </AppWrap>
  );
};

export default App;
