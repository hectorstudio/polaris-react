import gql from 'graphql-tag';

const FETCH_SUGGESTIONS = gql`
  query search($name: String!) {
    search(name: $name) {
      ... on Movie {
        type: __typename
        name
        posterPath
        year
        uuid
      }
      ... on Series {
        type: __typename
        name
        posterPath
        firstAirDate
        uuid
      }
    }
  }
`;

export default FETCH_SUGGESTIONS;
