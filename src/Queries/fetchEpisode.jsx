import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaItem from 'Components/Media/MediaItem';

const FETCH_EPISODE = gql`
    query episode($uuid: String!) {
        episode(uuid: $uuid) {    
          name
          overview
          still_path
          airDate: air_date

          playState: play_state {
            finished
            playtime
          }
          
            files {
                file_name
                uuid
                total_duration
                streams {
                    codec_mime
                    stream_type
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
      const { episode } = data;

      return (<MediaItem type="episode" {...episode} />);
    }}

  </Query>
);

export default FetchEpisode;
