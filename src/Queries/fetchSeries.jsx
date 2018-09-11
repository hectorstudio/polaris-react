import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import Series from 'Components/Media/Series';

const FETCH_SERIES = uuid => gql`
    {
        series(uuid: "${uuid}") {
            seriesName: name
            id: tmdbID
            uuid
            overview

            seasons {
                seasonName: name
                posterPath
                uuid
                id: tmdbID
                unwatchedCount: unwatchedEpisodesCount
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

      return (
        <Series {...data.series[0]} />
      );
    }}

  </Query>
);

export default FetchSeries;
