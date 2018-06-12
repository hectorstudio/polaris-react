import React from "react"
import { render } from "react-dom"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider as AlertProvider } from 'react-alert'

import 'App.css';

import App from 'Components/App'
import Client from 'Components/Client'
import Theme from 'Components/Theme'
import AlertTemplate from 'Components/Alert'

const AlertOptions = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
}

const BytesizedStreaming = () => (
    <Router>
        <ApolloProvider client={Client}>
            <ThemeProvider theme={Theme}>
                <AlertProvider template={AlertTemplate} {...AlertOptions}>
                    <App />
                </AlertProvider>
            </ThemeProvider>
        </ApolloProvider>
    </Router>
);

render(<BytesizedStreaming />, document.getElementById("bytesized-streaming"));