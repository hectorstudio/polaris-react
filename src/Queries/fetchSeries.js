import gql from 'graphql-tag';

const FETCH_SERIES = gql`
  query series($uuid: String!) {
    series(uuid: $uuid) {
      type: __typename
      name
      uuid
      overview
      posterPath
      firstAirDate

      seasons {
        type: __typename
        name
        seasonNumber
        posterPath
        uuid
        unwatchedEpisodesCount

        episodes {
          uuid

          playState {
            finished
            playtime
          }
        }
      }
    }
  }
`;

export default FETCH_SERIES;
