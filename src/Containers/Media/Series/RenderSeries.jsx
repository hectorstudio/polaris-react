import React from 'react';
import { Query } from 'react-apollo';

import FETCH_SERIES from 'Queries/fetchSeries';

import Loading from 'Components/Loading';
import Series from 'Components/Media/Series';
import MediaCard from 'Components/Media/Card';

import { LibraryListItem } from '../Styles';

const RenderSeries = ({ uuid }) => (
  <Query
    query={FETCH_SERIES(uuid)}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const series = { ...data.series[0] };
      const seasonList = series.seasons.map(s => (
        <LibraryListItem key={s.uuid}>
          <MediaCard {...s} showText />
        </LibraryListItem>
      ));

      return (
        <Series {...series}>
          { seasonList }
        </Series>
      );
    }}

  </Query>
);

export default RenderSeries;
