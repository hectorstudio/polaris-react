import gql from 'graphql-tag';

const FETCH_MOVIE = gql`
  query movies($uuid: String!) {
    movies(uuid: $uuid) {
      type: __typename
      name
      year
      overview
      imdbID
      backdropPath
      uuid
      posterPath
      
      playState {
        finished
        playtime
      }
      
      files {
        fileName
        filePath
        uuid
        totalDuration
        streams {
          codecMime
          streamType
          resolution
          bitRate
          language
        }
      }
    }
  }
`;

export default FETCH_MOVIE;
