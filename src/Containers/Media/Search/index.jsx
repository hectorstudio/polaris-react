import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import FetchSearchResults from 'Queries/fetchSearchResults';
import Empty from 'Components/Media/Card/Empty';

// Local Styles
import { PageHeading } from 'Styles';
import LibraryListWrap from '../Styles';
// Global Styles

const Search = ({ match }) => (
  <LibraryListWrap>
    <PageHeading>
      Results For:
      {match.params.value}
    </PageHeading>
    <FetchSearchResults value={match.params.value} />
    <Empty />
  </LibraryListWrap>
);

Search.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};


export default Search;
