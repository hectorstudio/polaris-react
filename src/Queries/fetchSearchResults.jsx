import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

const FETCH_SEARCH_RESULTS = gql`
  query search($value: String!) {
    search(name: $value) {
      type: __typename
      ... on Movie {
        name
        posterPath
        year
        uuid
        
        playState {
          finished
          playtime
        }

        files {
          totalDuration
        }
      }
      ... on Series {
        name
        posterPath
        firstAirDate
        uuid
      }
    }
  }
`;

const FetchSearchResults = ({ value }) => (
  <Query
    query={FETCH_SEARCH_RESULTS}
    variables={{ value }}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;
      if (data.search.length === 0) return `No Results Found For ${value}`;

      return data.search.map((r => <MediaCard key={r.uuid} {...r} />));
    }}
  </Query>
);

FetchSearchResults.propTypes = {
  value: PropTypes.string.isRequired,
};

export default FetchSearchResults;
