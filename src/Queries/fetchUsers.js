import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import UserListItem from 'Components/Admin/Users/UserListItem'

const FETCH_INVITES = gql`
    {
        invites {    
            code
            user {
                login
            }
        }
    }
`

const FetchUsers = () => {
    return (
        <Query
            query={ FETCH_INVITES }
        >

            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                console.log(data);

                return data.invites.map(({ code, user }, i) => {
                    let user_details = {
                        invite_code: code,
                        user: user.login
                    }

                    return (<UserListItem key={i} {...user_details} />);
                });
            }}

        </Query>
    )
};

export default FetchUsers
