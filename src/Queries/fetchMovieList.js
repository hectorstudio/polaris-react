import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import MediaCard from 'Components/Media/Card';

const FETCH_MOVIES = gql`
    {
        movies {
            name,
            poster_path,
            imdb_id,
            uuid
        }
    }
`;

const FetchMovieList = () => (
  <Query
    query={FETCH_MOVIES}
  >

    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return data.movies.map(({
        name, poster_path, imdb_id, uuid,
      }, i) => {
        const movie_details = {
          name,
          posterPath: poster_path,
          id: imdb_id,
          uuid,
        };

        return (<MediaCard type="movie" key={i} {...movie_details} />);
      });
    }}

  </Query>
);

export default FetchMovieList;
