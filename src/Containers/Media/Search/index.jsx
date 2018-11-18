import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import Empty from 'Components/Media/Card/Empty';
import RenderSearchResults from './RenderSearchResults';

import { LibraryListWrap } from '../Styles';

const Search = ({ match }) => (
  <LibraryListWrap>
    <RenderSearchResults value={match.params.value} />
    <Empty />
  </LibraryListWrap>
);

Search.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};


export default Search;
