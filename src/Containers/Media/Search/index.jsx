import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import Empty from 'Components/Media/Card/Empty';
import ContentWrap from 'Containers/ContentWrap';
import RenderSearchResults from './RenderSearchResults';

import { LibraryListWrap } from '../Styles';

const Search = ({ match }) => (
  <ContentWrap>
    <LibraryListWrap>
      <RenderSearchResults value={match.params.value} />
      <Empty />
    </LibraryListWrap>
  </ContentWrap>
);

Search.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};


export default Search;
