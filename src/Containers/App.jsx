import React, { Fragment } from 'react';
import { Auth, checkAuth } from 'Client/Auth';
import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';
import Routes from 'Routes';
import ModalContainer from 'Containers/ModalContainer';

import { AppWrap, PageWrap } from './Styles';

const App = () => {
  checkAuth();

  const LoggedIn = () => (
    <Fragment>
      <Header />
      <Sidebar />
      <PageWrap>
        <Routes />
      </PageWrap>
      <ModalContainer />
    </Fragment>
  );

  return (
    <AppWrap authed={Auth.isAuthenticated}>
      {(Auth.isAuthenticated ? <LoggedIn /> : <Routes />)}
    </AppWrap>
  );
};

export default App;
