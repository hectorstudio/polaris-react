import gql from 'graphql-tag';

const FETCH_SERIES = uuid => gql`
  {
    series(uuid: "${uuid}") {
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
        }
      }
    }
  }
`;

export default FETCH_SERIES;
