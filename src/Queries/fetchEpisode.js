import gql from 'graphql-tag';

const FETCH_EPISODE = gql`
  query episode($uuid: String!) {
    episode(uuid: $uuid) {
      type: __typename
      name
      overview
      airDate
      stillPath
      uuid

      season {
        uuid
        name
        series {
          uuid
          name
          posterPath
        }
      }

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

export default FETCH_EPISODE;
