import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import MediaCard from 'Components/Media/Card'

const FETCH_SERIES = gql`
    {
        tvseries {
            name,
            poster_path,
            tmdb_id,
            uuid
        }
    }
`

const FetchSeries = () => (
    <Query
        query={FETCH_SERIES}
    >

        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return data.tvseries.map(({ name, poster_path, tmdb_id, uuid }, i) => {
                let series_details = {
                    name,
                    poster_path,
                    tmdb_id,
                    uuid
                }

                return (<MediaCard key={i} {...series_details} />);
            });
        }}

    </Query>
);

export default FetchSeries
