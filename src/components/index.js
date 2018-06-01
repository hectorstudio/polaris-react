import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    
    render() {        
        return (
            <ul>
                {/* {this.state.movies.map((movie) =>
                    <li>
                        <h5>{movie.title}</h5>
                        <img src={`http://atalanta.bysh.me:8282/images/tmdb/w342/${movie.poster_path}`} alt={movie.title} />
                    </li>
                )}  */}
                <li>1</li>
            </ul>
        );
    }
}

export default App;
