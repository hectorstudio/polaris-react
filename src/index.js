import React from "react"
import { render } from "react-dom"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import App from './Containers/App'
import client from './client'

const BytesizedStreaming = () => (
    <Router>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Router>
);

render(<BytesizedStreaming />, document.getElementById("root"));