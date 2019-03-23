import React from 'react';
import { Query } from 'react-apollo';
import { orderBy } from 'lodash';
import FETCH_SERIES from 'Queries/fetchSeries';

import Empty from 'Components/Media/Card/Empty';
import Loading from 'Components/Loading';
import Series from 'Components/Media/Series';
import MediaCard from 'Components/Media/Card';

import { LibraryListItem } from '../Styles';

const RenderSeries = ({ uuid }) => (
  <Query
    query={FETCH_SERIES}
    variables={{ uuid }}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;
      const series = { ...data.series[0] };

      const seasonList = orderBy(series.seasons, ['seasonNumber'], ['asc']).map(s => (
        <LibraryListItem key={s.uuid}>
          <MediaCard {...s} showText />
        </LibraryListItem>
      ));

      return (
        <Series {...series}>
          { seasonList }
          <Empty />
        </Series>
      );
    }}

  </Query>
);

export default RenderSeries;
