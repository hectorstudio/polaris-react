import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

const FETCH_MOVIES = gql`
  {
    movies {
      type: __typename
      name
      posterPath
      uuid

      playState {
        finished
        playtime
      }
      
      files {
        totalDuration
      }
    }
  }
`;

const FetchMovieList = () => (
  <Query
    query={FETCH_MOVIES}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      return data.movies.map((m => <MediaCard key={m.uuid} {...m} />));
    }}

  </Query>
);

export default FetchMovieList;
