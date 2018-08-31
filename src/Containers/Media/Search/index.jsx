import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import FetchSearchResults from 'Queries/fetchSearchResults';
import Empty from 'Components/Media/Card/Empty';

// Local Styles
import { PageHeading } from 'Styles';
import { LibraryWrap, LibraryListWrap } from '../Styles';
// Global Styles

const Search = ({ match }) => (
  <LibraryWrap>
    <PageHeading>
      Results For:
      {match.params.value}
    </PageHeading>

    <LibraryListWrap>
      <FetchSearchResults value={match.params.value} />
      <Empty length="10" />
    </LibraryListWrap>
  </LibraryWrap>
);

Search.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};


export default Search;
