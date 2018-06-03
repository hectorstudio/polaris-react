import gql from "graphql-tag"

export const FETCH_LIBRARIES = gql`
    {
        libraries {
            name
        }
    }
`
