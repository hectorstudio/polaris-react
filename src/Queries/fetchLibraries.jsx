import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import AlertInline from 'Components/Alerts/AlertInline';
import LibraryItem from 'Components/Media/LibraryHeader/LibraryItem';

const FETCH_LIBRARIES = gql`
  {
    libraries {
      id
      name
      filePath
    }
  }
`;

const FetchLibraryList = ({ type }) => (
  <Query
    query={FETCH_LIBRARIES}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading relative />;
      if (error) return `Error! ${error.message}`;

      const filteredLibrary = data.libraries.filter(l => l.name === type);

      if (filteredLibrary.length === 0) {
        return (
          <AlertInline>No active folders within library</AlertInline>
        );
      }

      console.log(data);

      return filteredLibrary.map(
        (li => <LibraryItem key={li.id} filePath={li.filePath} id={li.id} />),
      );
    }}

  </Query>
);

FetchLibraryList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FetchLibraryList;
