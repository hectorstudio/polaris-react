import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Season from 'Components/Media/Season';

const FETCH_SEASON = uuid => gql`
    {
        season(uuid: "${uuid}") {
            seasonName: name
            overview
            seasonNumber: season_number
            airDate: air_date
            posterPath: poster_path
            id: tmdb_id
            uuid
            episodes {
                name
                uuid
                id: tmdb_id
            }
        }
    }
`;

const FetchSeason = ({ uuid }) => (
  <Query
    query={FETCH_SEASON(uuid)}
  >

    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <Season {...data.season} />
      );
    }}

  </Query>
);

export default FetchSeason;
