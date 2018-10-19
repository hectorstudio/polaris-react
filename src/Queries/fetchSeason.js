import gql from 'graphql-tag';

const FETCH_SEASON = uuid => gql`
  {
    season(uuid: "${uuid}") {
      type: __typename
      name
      overview
      seasonNumber
      airDate
      posterPath
      uuid
      unwatchedEpisodesCount

      series {
        posterPath
      }

      episodes {
        type: __typename
        name
        uuid
        stillPath
        id: tmdbID
        
        playState {
          finished
          playtime
        }
        
        files {
          totalDuration
        }
      }
    }
  }
`;

export default FETCH_SEASON;
