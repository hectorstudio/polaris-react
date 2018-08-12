import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import UserListItem from 'Components/Admin/Users/UserListItem'

const FETCH_USER = gql`
    {
        users {    
            login
            admin
        }
    }
`

const FetchUsers = () => {
    return (
        <Query
            query={ FETCH_USER }
        >

            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                console.log(data);

                return data.users.map(({ login, admin }, i) => {
                    let user_details = {
                        login,
                        admin
                    }

                    return (<UserListItem key={i} {...user_details} />);
                });
            }}

        </Query>
    )
};

export default FetchUsers
