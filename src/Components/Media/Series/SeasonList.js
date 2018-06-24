import React from 'react'

import MediaCard from 'Components/Media/Card'
import EpisodeList from './EpisodeList'

const SeasonList = props => (
    <div>
        {
            props.seasons.map(({ name, episodes, poster_path, tmdb_id }, i) => {
                let season_details = {
                    name,
                    episodes,
                    poster_path,
                    tmdb_id
                }

                return ( 
                    <section key={i}>
                        <MediaCard {...season_details} /> 
                        <EpisodeList episodes={episodes} poster_path={poster_path} />
                    </section>
                );
            })
        }
    </div>
)

export default SeasonList