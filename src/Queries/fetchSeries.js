import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Series from 'Components/Media/Series'

const FETCH_MOVIE = uuid => gql`
    {
        tvseries(uuid: "${uuid}") {
            name,
            seasons {
                name,
                poster_path,
                tmdb_id,
                uuid
                episodes {
                    name,
                    tmdb_id,
                    uuid
                }
            }
        }
    }
`

const FetchSeries = ({ uuid }) => {
    return (
        <Query
            query={FETCH_MOVIE(uuid)}
        >

            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                let series = data.tvseries[0];

                return (
                    <Series {...series} />
                );
            }}

        </Query>
    )
};

export default FetchSeries
