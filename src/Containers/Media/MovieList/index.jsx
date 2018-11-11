import React from 'react';

import Empty from 'Components/Media/Card/Empty';
import ContentWrap from 'Containers/ContentWrap';
import RenderMoviesList from './RenderMovieList';

import { LibraryListWrap } from '../Styles';

const MovieList = () => (
  <ContentWrap>
    <LibraryListWrap>
      <RenderMoviesList />
      <Empty />
    </LibraryListWrap>
  </ContentWrap>
);

export default MovieList;
