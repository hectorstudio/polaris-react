import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import MediaCard from 'Components/Media/Card';

const FETCH_SERIES_LIST = gql`
    {
        series {
            name,
            posterPath: poster_path,
            id: tmdb_id,
            uuid
        }
    }
`;

const FetchSeriesList = () => (
  <Query
    query={FETCH_SERIES_LIST}
  >

    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return data.series.map(({
        name, seasons, posterPath, id, uuid,
      }) => {
        const series = {
          name,
          seasons,
          posterPath,
          id,
          uuid,
        };

        return (<MediaCard type="series" key={uuid} {...series} />);
      });
    }}

  </Query>
);

export default FetchSeriesList;
