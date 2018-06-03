import gql from "graphql-tag"

export const FETCH_LIBRARIES = gql`
    {
        libraries {
            name
        }
    }
`

export const FETCH_LIBRARY = gql`
    query Library($name: String, $type: FeedType!, $offset: Int, $limit: Int){
        library(name: $name) {
            type,
            feed( type: $type, offset: $offset, limit: $limit ) {
                title
            }
        }
    }
`
