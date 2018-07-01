import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Season from 'Components/Media/Season'

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

            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <Season { ...data.tvseason } />
                )
            }}

        </Query>
    )
};

export default FetchSeason
