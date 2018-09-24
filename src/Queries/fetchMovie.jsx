import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaItem from 'Components/Media/MediaItem';

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

const FetchMovie = ({ uuid }) => (
  <Query
    query={FETCH_MOVIE}
    variables={{ uuid }}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const m = { ...data.movies[0] };

      return (<MediaItem {...m} />);
    }}

  </Query>
);

export default FetchMovie;
