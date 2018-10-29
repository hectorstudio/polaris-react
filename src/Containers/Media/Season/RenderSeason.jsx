import React from 'react';
import { Query } from 'react-apollo';
import { orderBy } from 'lodash';
import FETCH_SEASON from 'Queries/fetchSeason';

import Empty from 'Components/Media/Card/Empty';
import Loading from 'Components/Loading';
import Season from 'Components/Media/Season';
import MediaCard from 'Components/Media/Card';

import { LibraryListItemWide } from '../Styles';

const RenderSeason = ({ uuid }) => (
  <Query
    query={FETCH_SEASON(uuid)}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const episodeList = orderBy(data.season.episodes, ['episodeNumber'], ['asc']).map(s => (
        <LibraryListItemWide key={s.uuid}>
          <MediaCard {...s} wide showText />
        </LibraryListItemWide>
      ));

      return (
        <Season {...data.season}>
          { episodeList }
          <Empty wide />
        </Season>
      );
    }}

  </Query>
);

export default RenderSeason;
