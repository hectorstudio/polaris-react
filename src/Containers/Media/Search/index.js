import React from 'react';
import FetchSearchResults from 'Queries/fetchSearchResults';
import Empty from 'Components/Media/Card/Empty';

// Local Styles
import { PageHeading } from 'Styles';
import { LibraryWrap, LibraryListWrap } from '../Styles';
// Global Styles

const Search = props => (
  <LibraryWrap>
    <PageHeading>
Results For: "
      {props.match.params.value}
"
    </PageHeading>

    <LibraryListWrap>
      <FetchSearchResults value={props.match.params.value} />
      <Empty length="10" />
    </LibraryListWrap>
  </LibraryWrap>
);

export default Search;
