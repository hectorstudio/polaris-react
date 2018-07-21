import gql from "graphql-tag"

const FETCH_SEARCH = gql`
    query search($name: String!) {
        search(name: $name) {
            __typename
            ... on Movie {
                __typename
                name
                poster_path
                year
            }
            ... on Series {
                __typename
                name
                poster_path
                first_air_date
            }
        }
    }
`

export default FETCH_SEARCH
