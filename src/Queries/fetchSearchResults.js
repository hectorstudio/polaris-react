import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import MediaCard from 'Components/Media/Card'

const FETCH_SEARCH_RESULTS = gql`
    query search($value: String!) {
        search(name: $value) {    
            ... on Movie {
                __typename
                name
                poster_path
                year
                uuid
            }
            ... on Series {
                __typename
                name
                poster_path
                first_air_date
                uuid
            }
        }
    }
`

const FetchSearchResults = ({ value }) => {
    return (
        <Query
            query={ FETCH_SEARCH_RESULTS }
            variables={{ value }}
        >

            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return data.search.map(({ __typename, name, poster_path, imdb_id, uuid }, i) => {
                    let result_details = {
                        name,
                        poster_path,
                        imdb_id,
                        uuid
                    }

                    return (<MediaCard type={__typename} key={i} {...result_details} />);
                });
            }}

        </Query>
    )
};

export default FetchSearchResults
