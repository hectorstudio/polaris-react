import gql from "graphql-tag"

const CREATE_USER_INVITE = gql` 
    {
        createUserInvite {
            code
            error
        }
    }
`

export default CREATE_USER_INVITE;