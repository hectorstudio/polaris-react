import gql from "graphql-tag"

const FETCH_SEARCH = gql`
    query search($name: String!) {
        search(name: $name) {
            __typename
            ... on Movie {
                __typename
                name
                poster_path
            }
            ... on Series {
                __typename
                name
                poster_path
            }
        }
    }
`

export default FETCH_SEARCH
