import React from 'react';
import { Query } from 'react-apollo';
import { orderBy } from 'lodash';
import FETCH_SERIES_LIST from 'Queries/fetchSeriesList';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

import { LibraryListItem, NoResults } from '../Styles';

const RenderSeriesList = () => (
  <Query
    query={FETCH_SERIES_LIST}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      if (data.series.length > 0) {
        return orderBy(data.series, ['name'], ['asc']).map(s => (
          <LibraryListItem key={s.uuid}>
            <MediaCard {...s} />
          </LibraryListItem>
        ));
      }

      return (
        <NoResults>
          You currently have no Series or have not added a folder to your Series library.
        </NoResults>
      );
    }}
  </Query>
);

export default RenderSeriesList;
