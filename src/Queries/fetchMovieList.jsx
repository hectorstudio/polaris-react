import gql from 'graphql-tag';

const FETCH_MOVIES = gql`
  {
    movies {
      type: __typename
      name
      posterPath
      uuid

      playState {
        finished
        playtime
      }
      
      files {
        totalDuration
      }
    }
  }
`;

export default FETCH_MOVIES;
