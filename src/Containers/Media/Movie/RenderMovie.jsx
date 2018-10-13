import React from 'react';
import { Query } from 'react-apollo';

import FETCH_MOVIE from 'Queries/fetchMovie';
import Loading from 'Components/Loading';
import MediaItem from 'Components/Media/MediaItem';

const RenderMovie = ({ uuid }) => (
  <Query
    query={FETCH_MOVIE}
    variables={{ uuid }}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const m = { ...data.movies[0] };

      return <MediaItem {...m} />;
    }}

  </Query>
);

export default RenderMovie;
