/* eslint-disable */

import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as AlertProvider } from 'react-alert';
import { Provider as ReduxProvider } from 'react-redux';

import 'App.css';

import store from 'Redux/store';
import Client from 'Client';
import Theme from 'Styles/Theme';
import App from 'Containers/App';
import { AlertTemplate, AlertOptions } from 'Components/Alerts';

const Olaris = () => (
  <ReduxProvider store={store}>
    <Router>
      <ApolloProvider client={Client}>
        <ThemeProvider theme={Theme}>
          <AlertProvider template={AlertTemplate} {...AlertOptions}>
            <App />
          </AlertProvider>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  </ReduxProvider>
);

render(<Olaris />, document.getElementById('olaris'));
