import React from "react"
import { render } from "react-dom"
import { LastLocationProvider } from 'react-router-last-location';
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider as AlertProvider } from 'react-alert'

import 'App.css';

import Client from './Client'
import Theme from 'Styles/Theme'
import App from 'Containers/App'
import AlertTemplate from 'Components/Alerts'

const AlertOptions = {
    position: 'bottom right',
    timeout: 5000,
    transition: 'fade',
    offset: '30'
}

const BytesizedStreaming = () => (
    <Router basename="/app">
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

render(<BytesizedStreaming />, document.getElementById("bytesized-streaming"));
