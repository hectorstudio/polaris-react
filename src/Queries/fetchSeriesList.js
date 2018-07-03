import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import MediaCard from 'Components/Media/Card'

const FETCH_SERIES_LIST = gql`
    {
        series {
            name,
            poster_path,
            tmdb_id,
            uuid
        }
    }
`

const FetchSeriesList = () => (
    <Query
        query={FETCH_SERIES_LIST}
    >

        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return data.series.map(({ name, seasons, poster_path, tmdb_id, uuid }, i) => {
                let series_details = {
                    name,
                    seasons,
                    poster_path,
                    tmdb_id,
                    uuid
                }

                return (<MediaCard type="series" key={i} {...series_details} />);
            });
        }}

    </Query>
);

export default FetchSeriesList
