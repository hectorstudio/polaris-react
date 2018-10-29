import gql from 'graphql-tag';

const UP_NEXT = gql`
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

export default UP_NEXT;
