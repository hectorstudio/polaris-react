import React from 'react';
import FetchMovieList from 'Queries/fetchMovieList';
import Empty from 'Components/Media/Card/Empty';

import ContentWrap from 'Containers/ContentWrap';
import LibraryHeader from 'Components/Media/LibraryHeader';
import LibraryListWrap from '../Styles';

const MovieList = () => (
  <ContentWrap>
    <LibraryListWrap>
      <LibraryHeader type="movies" button="Manage Movies" />
      <FetchMovieList />
      <Empty />
    </LibraryListWrap>
  </ContentWrap>
);

export default MovieList;
