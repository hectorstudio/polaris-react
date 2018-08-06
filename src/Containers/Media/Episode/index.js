import React from 'react'

import FetchEpisode from 'Queries/fetchEpisode'

const Episode = props => {
    return (
        <FetchEpisode uuid={props.match.params.uuid} />
    )
}

export default Episode