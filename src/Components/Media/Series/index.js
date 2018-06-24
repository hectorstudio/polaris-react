import React, { Component } from 'react'

import SeasonList from './SeasonList'

class Series extends Component {
    render() {
        const { name, seasons } = this.props;

        return (
            <article>
                <h1>{name}</h1>
                <SeasonList seasons={seasons}/>
            </article>
        )
    }
}

export default Series