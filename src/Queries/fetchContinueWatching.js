import gql from 'graphql-tag';

const CONTINUE_WATCHING = gql`
  {
    upNext {
      ...on Movie {
        type: __typename
        uuid
        name
        year
        posterPath

        playState {
          finished
          playtime
        }

        files {
          totalDuration
        }
      }
      ...on Episode {
        type: __typename
        uuid
        name
        episodeNumber

        season {
          seasonNumber
          series {
            name
            posterPath
          }
        }

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

export default CONTINUE_WATCHING;
