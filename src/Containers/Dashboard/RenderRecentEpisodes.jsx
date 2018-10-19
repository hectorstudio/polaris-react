import React from 'react';
import { Query } from 'react-apollo';

import RECENTLY_ADDED from 'Queries/fetchRecentlyAdded';

import Carousel from 'Components/Carousel';
import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

import { MediaCardWrap } from './Styles';

const RenderRecentEpisodes = () => (
  <Query
    query={RECENTLY_ADDED}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const episodes = data.recentlyAdded.filter(m => m.type === 'Episode');

      const RecentlyAddedEpisodes = episodes.map((ra) => {
        const { posterPath } = ra.season.series;

        return (
          <MediaCardWrap key={ra.uuid}>
            <MediaCard showText {...ra} posterPath={posterPath} />
          </MediaCardWrap>
        );
      });

      return (
        <Carousel>
          {RecentlyAddedEpisodes}
        </Carousel>
      );
    }}

  </Query>
);

export default RenderRecentEpisodes;
