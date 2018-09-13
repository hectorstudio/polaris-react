import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

const FETCH_SERIES_LIST = gql`
  {
    series {
      type: __typename
      name
      posterPath
      uuid
      unwatchedEpisodesCount
    }
  }
`;

const FetchSeriesList = () => (
  <Query
    query={FETCH_SERIES_LIST}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      return data.series.map((s => <MediaCard key={s.uuid} {...s} />));
    }}

  </Query>
);

export default FetchSeriesList;
