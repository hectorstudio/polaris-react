import gql from 'graphql-tag';

const FETCH_SEASON = gql`
  query season($uuid: String!) {
    season(uuid: $uuid) {
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
        name
        overview
        uuid
      }

      episodes {
        type: __typename
        name
        uuid
        stillPath
        episodeNumber
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
