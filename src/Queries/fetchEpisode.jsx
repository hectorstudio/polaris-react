import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaItem from 'Components/Media/MediaItem';

export const FETCH_EPISODE = gql`
  query episode($uuid: String!) {
    episode(uuid: $uuid) {
      type: __typename
      name
      overview
      airDate
      stillPath
      uuid
      
      season {
        series {
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

export const FetchEpisode = ({ uuid }) => (
  <Query
    query={FETCH_EPISODE}
    variables={{ uuid }}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      return (<MediaItem {...data.episode} />);
    }}

  </Query>
);
