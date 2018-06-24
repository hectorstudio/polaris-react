import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Movie from './Movie'
import Series from './Series'

class MediaCard extends Component {
    render() { 
        const isMovie = (this.props.type === 'movie');

        return ( 
            (isMovie ? <Movie {...this.props} /> : <Series {...this.props}/>)
        )
    }
}
 
export default withRouter(MediaCard);