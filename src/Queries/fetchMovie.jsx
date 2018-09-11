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
            imdbID
            backdropPath
            uuid
            posterPath

            playState{
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

const FetchMovie = ({ uuid }) => (
  <Query
    query={FETCH_MOVIE}
    variables={{ uuid }}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const movie = {
        ...data.movies[0],
        length: data.movies[0].files[0].total_duration,
        type: 'movie',
      };

      return (<MediaItem {...movie} />);
    }}

  </Query>
);

export default FetchMovie;
