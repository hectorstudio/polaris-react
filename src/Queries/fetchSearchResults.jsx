import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import MediaCard from 'Components/Media/Card';

const FETCH_SEARCH_RESULTS = gql`
    query search($value: String!) {
        search(name: $value) {    
            ... on Movie {
                typename: __typename
                name
                posterPath: poster_path
                year
                uuid
            }
            ... on Series {
                typename: __typename
                name
                posterPath: poster_path
                airDate: first_air_date
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
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      if (data.search.length === 0) return `No Results Found For ${value}`;

      return data.search.map(({
        typename, name, posterPath, uuid,
      }) => {
        const result = {
          name,
          posterPath,
          uuid,
        };

        return (<MediaCard type={typename} key={uuid} {...result} />);
      });
    }}
  </Query>
);

FetchSearchResults.propTypes = {
  value: PropTypes.string.isRequired,
};

export default FetchSearchResults;
