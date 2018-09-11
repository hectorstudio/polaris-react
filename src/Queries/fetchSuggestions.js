import gql from 'graphql-tag';

const FETCH_SUGGESTIONS = gql`
    query search($name: String!) {
        search(name: $name) {
            ... on Movie {
                typename: __typename
                name
                posterPath
                year
                uuid
            }
            ... on Series {
                typename: __typename
                name
                posterPath
                firstAirDate
                uuid
            }
        }
    }
`;

export default FETCH_SUGGESTIONS;
