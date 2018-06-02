import React from "react"
import { render } from "react-dom"
import { ApolloProvider } from "react-apollo"

import './App.css';
import App from './Components'
import client from './Client'

const BytesizedStreaming = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

render(<BytesizedStreaming />, document.getElementById("root"));