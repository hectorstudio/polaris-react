import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaItem from 'Components/Media/MediaItem';

const FETCH_EPISODE = gql`
query episode($uuid: String!) {
  episode(uuid: $uuid) {
    type: __typename
    name
    overview
    airDate
    stillPath
    
    playState {
      finished
      playtime
    }

    files {
      fileName
      uuid
      totalDuration
      streams {
        codecMime
        streamType
      }
    }
  }
}
`;

const FetchEpisode = ({ uuid }) => (
  <Query
    query={FETCH_EPISODE}
    variables={{ uuid }}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;
      
      const { e } = data;

      return (<MediaItem {...e} />);
    }}

  </Query>
);

export default FetchEpisode;
