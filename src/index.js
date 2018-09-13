/* eslint-disable */

import React from 'react';
import { render } from 'react-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as AlertProvider } from 'react-alert';

import 'App.css';

import Client from 'Client';
import Theme from 'Styles/Theme';
import App from 'Containers/App';
import { AlertTemplate, AlertOptions } from 'Components/Alerts';

const Olaris = () => (
  <Router>
    <LastLocationProvider>
      <ApolloProvider client={Client}>
        <ThemeProvider theme={Theme}>
          <AlertProvider template={AlertTemplate} {...AlertOptions}>
            <App />
          </AlertProvider>
        </ThemeProvider>
      </ApolloProvider>
    </LastLocationProvider>
  </Router>
);

render(<Olaris />, document.getElementById('olaris'));
