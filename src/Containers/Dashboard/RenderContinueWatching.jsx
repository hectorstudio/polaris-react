import React from 'react';
import { Query } from 'react-apollo';

import CONTINUE_WATCHING from 'Queries/fetchContinueWatching';

import Carousel from 'Components/Carousel';
import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

import { NoResults } from 'Containers/Styles';
import { MediaCardWrap } from './Styles';

const RenderContinueWatching = () => (
  <Query
    query={CONTINUE_WATCHING}
    no-cache
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      if (data.upNext.length === 0) {
        return (
          <NoResults alignLeft>
            Nothing here? Why not start watching something?
          </NoResults>
        );
      }

      const continueWatching = data.upNext.map((un) => {
        const posterPath = un.posterPath || un.season.series.posterPath;
        return (
          <MediaCardWrap key={un.uuid}>
            <MediaCard showText {...un} posterPath={posterPath} />
          </MediaCardWrap>
        );
      });

      return (
        <Carousel>
          { continueWatching }
        </Carousel>
      );
    }}

  </Query>
);

export default RenderContinueWatching;
