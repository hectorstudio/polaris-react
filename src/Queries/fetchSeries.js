import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import MediaCard from 'Components/Media/Card'

const FETCH_SERIES = uuid => gql`
    {
        tvseries(uuid: "${uuid}") {
            name,
            poster_path,
            tmdb_id,
            uuid,
            seasons {
                name,
                poster_path,
                uuid,
                tmdb_id
            }
        }
    }
`

const FetchSeries = ({ uuid }) => (
    <Query
        query={FETCH_SERIES(uuid)}
    >

        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return data.tvseries[0].seasons.map(({ name, poster_path, tmdb_id, uuid }, i) => {
                let season = {
                    name,
                    poster_path,
                    tmdb_id,
                    uuid
                }

                return (<MediaCard type="season" key={i} {...season} />);
            });
        }}

    </Query>
);

export default FetchSeries
