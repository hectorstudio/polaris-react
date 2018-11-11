import React from 'react';

import Empty from 'Components/Media/Card/Empty';
import ContentWrap from 'Containers/ContentWrap';
import LibraryHeader from 'Components/Media/LibraryHeader';
import RenderMoviesList from './RenderMovieList';

import { LibraryListWrap } from '../Styles';

const MovieList = () => (
  <ContentWrap>
    <LibraryListWrap>
      <LibraryHeader type="movies" button="Add Library Folder" />
      <RenderMoviesList />
      <Empty />
    </LibraryListWrap>
  </ContentWrap>
);

export default MovieList;
