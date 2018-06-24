import React from 'react'

import MediaCard from 'Components/Media/Card'

const EpisodeList = props => (
    <div>
        {
            props.episodes.map(({ name, tmdb_id }, i) => {
                let episode_details = {
                    name,
                    poster_path: props.poster_path,
                    tmdb_id
                }

                return ( 
                    <section key={i}>
                        <MediaCard {...episode_details} /> 
                    </section>
                );
            })
        }
    </div>
)

export default EpisodeList