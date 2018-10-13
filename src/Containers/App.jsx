import React from 'react';
import { Auth, checkAuth } from 'Client/Auth';
import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';
import Routes from 'Routes';

import { AppWrap, PageWrap } from './Styles';

const App = () => {
  checkAuth();

  const LoggedIn = () => (
    <React.Fragment>
      <Header />
      <Sidebar />
      <PageWrap>
        <Routes />
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
