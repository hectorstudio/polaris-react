import React from 'react'

import MediaCard from 'Components/Media/Card'

const EpisodeList = props => (
    <div>
        {
            props.episodes.map(({ name, tmdb_id, uuid }, i) => {
                let episode_details = {
                    name,
                    poster_path: props.poster_path,
                    uuid,
                    tmdb_id
                }

                return ( 
                    <MediaCard key={i} {...episode_details} /> 
                );
            })
        }
    </div>
)

export default EpisodeList