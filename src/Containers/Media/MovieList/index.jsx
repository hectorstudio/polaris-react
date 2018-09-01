import React from 'react';
import FetchMovieList from 'Queries/fetchMovieList';
import Empty from 'Components/Media/Card/Empty';

import ContentWrap from 'Containers/ContentWrap';
import LibraryListWrap from '../Styles';

const MovieList = () => (
  <ContentWrap>
    <LibraryListWrap>
      <FetchMovieList />
      <Empty length="10" />
    </LibraryListWrap>
  </ContentWrap>
);

export default MovieList;
