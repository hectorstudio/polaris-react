import React from 'react';

import FetchSeriesList from 'Queries/fetchSeriesList';
import Empty from 'Components/Media/Card/Empty';
import ContentWrap from 'Containers/ContentWrap';
import LibraryListWrap from '../Styles';

const SeriesList = () => (
  <ContentWrap>
    <LibraryListWrap>
      <FetchSeriesList />
      <Empty />
    </LibraryListWrap>
  </ContentWrap>
);

export default SeriesList;
