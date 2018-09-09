import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

const FETCH_MOVIES = gql`
    {
        movies {
            name
            posterPath: poster_path
            id: imdb_id
            uuid
            playState: play_state {
              finished
              playtime
            }
            files {
              total_duration
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

      return data.movies.map(({
        name,
        posterPath,
        id,
        uuid,
        playState,
        files,
      }) => {
        const movie = {
          name,
          posterPath,
          id,
          uuid,
          playState,
          length: files[0].total_duration,
          type: 'movie',
        };

        return (<MediaCard key={uuid} {...movie} />);
      });
    }}

  </Query>
);

export default FetchMovieList;
