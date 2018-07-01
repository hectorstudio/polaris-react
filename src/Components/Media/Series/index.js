import React, { Component } from 'react'

import MediaCard from 'Components/Media/Card'

class Series extends Component {
    render() { 
        const { name, seasons, overview } = this.props;

        let seasonList = seasons.map(({ name, poster_path, tmdb_id, uuid }, i) => {
            let season = {
                name,
                poster_path,
                tmdb_id,
                uuid
            }

            return (
                <MediaCard type="season" key={i} {...season} />
            );
        });

        return ( 
            <div>
                <h1>{ name }</h1>
                <p>{ overview }</p>
                { seasonList }
            </div>
        )
    }
}
 
export default Series;