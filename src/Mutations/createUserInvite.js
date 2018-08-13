import gql from "graphql-tag"

const CREATE_USER_INVITE = gql` 
    mutation createUserInvite {
        createUserInvite {
            code 
            error {
                message
                hasError
            }
        }
    }
`

export default CREATE_USER_INVITE;