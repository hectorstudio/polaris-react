import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import FETCH_SEARCH_RESULTS from 'Queries/fetchSearchResults';
import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

import { LibraryListItem } from '../Styles';

const FetchSearchResults = ({ value }) => (
  <Query
    query={FETCH_SEARCH_RESULTS}
    variables={{ value }}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;
      if (data.search.length === 0) return `No Results Found For ${value}`;

      return data.search.map(r => (
        <LibraryListItem key={r.uuid}>
          <MediaCard {...r} />
        </LibraryListItem>
      ));
    }}
  </Query>
);

FetchSearchResults.propTypes = {
  value: PropTypes.string.isRequired,
};

export default FetchSearchResults;
