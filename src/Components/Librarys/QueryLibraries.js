import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import LibraryLink from './LibraryLink'

const FETCH_LIBRARIES = gql`
    {
        libraries {
            name
        }
    }
`

const QueryLibraries = () => (
    <Query
        query={ FETCH_LIBRARIES }
    >

        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return data.libraries.map(({ name }, i) => {
                let library_details = {
                    name
                }

                return (
                    <LibraryLink key={i} {...library_details} />
                );
            });
        }}

    </Query>
);

export default QueryLibraries