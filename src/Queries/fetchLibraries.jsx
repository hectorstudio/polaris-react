import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import { AlertInline } from 'Components/Alerts';
import LibraryItem from 'Components/Media/LibraryHeader/LibraryItem';

const FETCH_LIBRARIES = gql`
  {
    libraries {
      id
      kind
      filePath
    }
  }
`;

const FetchLibraryList = ({ kind }) => (
  <Query
    query={FETCH_LIBRARIES}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading relative />;
      if (error) return `Error! ${error.message}`;

      const filteredLibrary = data.libraries.filter(l => l.kind === kind);

      if (filteredLibrary.length === 0) {
        return (
          <AlertInline>No active folders within library</AlertInline>
        );
      }

      return filteredLibrary.map(
        (li => <LibraryItem key={li.id} filePath={li.filePath} id={li.id} />),
      );
    }}

  </Query>
);

FetchLibraryList.propTypes = {
  kind: PropTypes.number.isRequired,
};

export {
  FetchLibraryList,
  FETCH_LIBRARIES,
};
