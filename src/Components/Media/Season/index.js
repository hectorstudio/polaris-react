import React, { Component } from 'react'

import MediaCard from 'Components/Media/Card'

class Series extends Component {
    render() {
        const { name, episodes, poster_path } = this.props;

        let episodeList = episodes.map(({ name, tmdb_id, uuid }, i) => {
            let episode = {
                name,
                poster_path,
                tmdb_id,
                uuid
            }

            return (
                <MediaCard type="episode" key={i} {...episode} />
            );
        });

        return (
            <div>
                <h1>{ name }</h1>
                { episodeList }
            </div>
        )
    }
}

export default Series;