import React from 'react'

import FetchMovie from 'Queries/fetchMovie'

const Movie = props => {
    return (
        <FetchMovie uuid={props.match.params.uuid} />
    )
}

export default Movie