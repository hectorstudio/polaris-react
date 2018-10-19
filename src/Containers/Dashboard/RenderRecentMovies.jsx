import React from 'react';
import { Query } from 'react-apollo';

import RECENTLY_ADDED from 'Queries/fetchRecentlyAdded';

import Carousel from 'Components/Carousel';
import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

import { MediaCardWrap } from './Styles';

const RenderRecentMovies = () => (
  <Query
    query={RECENTLY_ADDED}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const movies = data.recentlyAdded.filter(m => m.type === 'Movie');
      const RecentlyAddedMovies = movies.map(ra => (
        <MediaCardWrap key={ra.uuid}>
          <MediaCard showText {...ra} />
        </MediaCardWrap>
      ));

      return (
        <Carousel>
          { RecentlyAddedMovies }
        </Carousel>
      );
    }}

  </Query>
);

export default RenderRecentMovies;
