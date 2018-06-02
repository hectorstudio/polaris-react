import React, { Component } from 'react'
import Movies from './MovieList'

class App extends Component {   
    render() {        
        return (
            <div id="bytesized-streaming">
                <Movies />
            </div>
        );
    }
}

export default App;
