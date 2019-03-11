import gql from 'graphql-tag';

const FETCH_SEARCH_RESULTS = gql`
  query search($value: String!) {
    search(name: $value) {
      type: __typename
      ... on Movie {
        name
        posterPath
        year
        uuid

        playState {
          finished
          playtime
        }

        files {
          totalDuration
        }
      }
      ... on Series {
        name
        posterPath
        firstAirDate
        uuid
      }
    }
  }
`;

export default FETCH_SEARCH_RESULTS;
