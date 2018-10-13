import React from 'react';
import { Query } from 'react-apollo';

import FETCH_MOVIES from 'Queries/fetchMovieList';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

import { LibraryListItem } from '../Styles';

const RenderMovieList = () => (
  <Query
    query={FETCH_MOVIES}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      return data.movies.map(m => (
        <LibraryListItem>
          <MediaCard key={m.uuid} {...m} />
        </LibraryListItem>
      ));
    }}

  </Query>
);

export default RenderMovieList;
