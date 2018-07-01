import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import MediaCard from 'Components/Media/Card'

const FETCH_SEASON = uuid => gql`
    {
        tvseason(uuid: "${uuid}") {
            name
            overview
            season_number
            air_date
            poster_path
            tmdb_id
            uuid
            episodes {
                name
                uuid
            }
        }
    }
`

const FetchSeason = ({ uuid }) => {
    return (
        <Query
            query={FETCH_SEASON(uuid)}
        >

            {({ loading, error, data, i }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                
                return data.tvseason.episodes.map(({ name, uuid }, i) => {
                    let season = {
                        name,
                        poster_path: data.tvseason.poster_path,
                        uuid
                    }

                    return (<MediaCard type="episode" key={i} {...season} />);
                });
            }}

        </Query>
    )
};

export default FetchSeason
