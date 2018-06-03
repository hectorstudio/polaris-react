import React from 'react'
import { Query } from "react-apollo"
import { FETCH_LIBRARIES } from 'Queries'

import LibraryLink from './LibraryLink'

const LibraryList = () => (
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
                    <li>
                        <LibraryLink key={i} {...library_details} />
                    </li>
                );
            });
        }}

    </Query>
);

export default LibraryList