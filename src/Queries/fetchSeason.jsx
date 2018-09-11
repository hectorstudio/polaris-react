import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import Season from 'Components/Media/Season';

const FETCH_SEASON = uuid => gql`
    {
        season(uuid: "${uuid}") {
            seasonName: name
            overview
            seasonNumber
            airDate
            posterPath
            id: tmdbID
            uuid
            unwatchedCount: unwatchedEpisodesCount
            episodes {
                name
                uuid
                stillPath
                id: tmdbID

                playState {
                  finished
                  playtime
                }

                files {
                  totalDuration
                }
            }
        }
    }
`;

const FetchSeason = ({ uuid }) => (
  <Query
    query={FETCH_SEASON(uuid)}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      return (
        <Season {...data.season} />
      );
    }}

  </Query>
);

export default FetchSeason;
