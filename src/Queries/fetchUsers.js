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

const FetchUsers = props => {

    return (
        <Query
            query={ FETCH_INVITES }
        >
                
            {({ loading, error, data, refetch, networkStatus  }) => {
                if (networkStatus === 4) return "Refetching!";
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                const _generateInviteCode = () => {
                    props.generateUserInvite()
                    refetch()
                }

                return data.invites.map(({ code, user }, i) => {
                    let length = data.invites.length;

                    return (
                        <React.Fragment key={i}>
                            <ul>
                                <UserListItem
                                    user={(user ? user.login : false)}
                                    invite_code={code}
                                />
                            </ul>

                            { length === i+1 &&
                                <button onClick={() => { _generateInviteCode() }}>Generate Invite Code</button>
                            }
                        </React.Fragment>
                    )
                });
            }}

        </Query>
    )
};

export default FetchUsers
