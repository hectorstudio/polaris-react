import React, { Fragment } from 'react';
import { Auth, checkAuth } from 'Client/Auth';

import ContentWrap from 'Containers/ContentWrap';
import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';
import Routes from 'Routes';
import ModalContainer from 'Containers/ModalContainer';

import { AppWrap } from './Styles';

const App = () => {
  checkAuth();

  const LoggedIn = () => (
    <Fragment>
      <Sidebar />
      <ContentWrap>
        <Fragment>
          <Header />
          <Routes />
        </Fragment>
      </ContentWrap>
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
