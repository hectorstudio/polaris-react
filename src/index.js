import React from "react"
import { render } from "react-dom"
import { ApolloProvider } from "react-apollo"

import './app.css';
import App from './components'
import client from './client'

const BytesizedStreaming = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

render(<BytesizedStreaming />, document.getElementById("root"));