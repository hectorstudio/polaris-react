import gql from "graphql-tag"

const FETCH_SUGGESTIONS = gql`
    query search($name: String!) {
        search(name: $name) {
            __typename
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

export default FETCH_SUGGESTIONS
