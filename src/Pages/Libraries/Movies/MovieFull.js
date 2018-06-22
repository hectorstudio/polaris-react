import React from 'react'
import FetchMovie from 'Actions/fetchMovie'

const MovieFull = props => {
    return (
        <FetchMovie uuid={props.match.params.uuid} />
    )
}

export default MovieFull