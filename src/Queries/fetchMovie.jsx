import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaItem from 'Components/Media/MediaItem';

const FETCH_MOVIE = gql`
    query movies($uuid: String!) {
        movies(uuid: $uuid) {    
            name
            year
            overview
            imdb_id
            backdrop_path
            uuid

            files {
                file_name
                uuid
                streams{
                    codec_mime
                    stream_type
                }
            }
        }
    }
`;

const FetchMovie = ({ uuid }) => (
  <Query
    query={FETCH_MOVIE}
    variables={{ uuid }}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const movie = data.movies[0];

      return (<MediaItem {...movie} />);
    }}

  </Query>
);

export default FetchMovie;
