import React from 'react';

import Empty from 'Components/Media/Card/Empty';
import RenderMoviesList from './RenderMovieList';

import { LibraryListWrap } from '../Styles';

const MovieList = () => (
  <LibraryListWrap>
    <RenderMoviesList />
    <Empty />
  </LibraryListWrap>
);

export default MovieList;
