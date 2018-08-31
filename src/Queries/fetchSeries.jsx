import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Series from 'Components/Media/Series';

const FETCH_SERIES = uuid => gql`
    {
        series(uuid: "${uuid}") {
            seriesName: name
            id: tmdb_id
            uuid
            overview
            
            seasons {
                seasonName: name
                posterPath: poster_path
                uuid
                id: tmdb_id
            }
        }
    }
`;

const FetchSeries = ({ uuid }) => (
  <Query
    query={FETCH_SERIES(uuid)}
  >

    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <Series {...data.series[0]} />
      );
    }}

  </Query>
);

export default FetchSeries;
