import React from "react"
import { render } from "react-dom"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import 'App.css';

import App from 'Components/App'
import Client from 'Components/Client'
import Theme from 'Components/Theme'

const BytesizedStreaming = () => (
    <Router>
        <ApolloProvider client={Client}>
            <ThemeProvider theme={Theme}>
                <App />
            </ThemeProvider>
        </ApolloProvider>
    </Router>
);

render(<BytesizedStreaming />, document.getElementById("bytesized-streaming"));