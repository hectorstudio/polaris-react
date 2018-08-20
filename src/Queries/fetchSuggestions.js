import gql from 'graphql-tag';

const FETCH_SUGGESTIONS = gql`
    query search($name: String!) {
        search(name: $name) { 
            ... on Movie {
                typename: __typename
                name
                poster_path
                year
                uuid
            }
            ... on Series {
                typename: __typename
                name
                poster_path
                first_air_date
                uuid
            }
        }
    }
`;

export default FETCH_SUGGESTIONS;
