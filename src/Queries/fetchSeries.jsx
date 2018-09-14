import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import Series from 'Components/Media/Series';

const FETCH_SERIES = uuid => gql`
  {
    series(uuid: "${uuid}") {
      type: __typename
      name
      uuid
      overview
      posterPath
      
      seasons {
        type: __typename
        name
        posterPath
        uuid
        unwatchedEpisodesCount
      }
    }
  }
`;

const FetchSeries = ({ uuid }) => (
  <Query
    query={FETCH_SERIES(uuid)}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const s = { ...data.series[0] };

      return <Series {...s} />;
    }}

  </Query>
);

export default FetchSeries;
