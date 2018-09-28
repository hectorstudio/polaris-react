import React from 'react';

import FetchSeriesList from 'Queries/fetchSeriesList';
import Empty from 'Components/Media/Card/Empty';
import ContentWrap from 'Containers/ContentWrap';
import LibraryHeader from 'Components/Media/LibraryHeader';

import LibraryListWrap from '../Styles';

const SeriesList = () => (
  <ContentWrap>
    <LibraryListWrap>
      <LibraryHeader type="series" button="Manage Series" />
      <FetchSeriesList />
      <Empty />
    </LibraryListWrap>
  </ContentWrap>
);

export default SeriesList;
