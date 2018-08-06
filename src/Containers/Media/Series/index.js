import React from 'react'

import FetchSeries from 'Queries/fetchSeries'

const Series = props => {
    return (
        <FetchSeries uuid={props.match.params.uuid} />
    )
}

export default Series