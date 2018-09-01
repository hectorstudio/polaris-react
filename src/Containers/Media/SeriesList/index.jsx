import React from 'react';
import FetchSeriesList from 'Queries/fetchSeriesList';
import Empty from 'Components/Media/Card/Empty';

import LibraryListWrap from '../Styles';

const SeriesList = () => (
  <LibraryListWrap>
    <FetchSeriesList />
    <Empty length="10" />
  </LibraryListWrap>
);

export default SeriesList;
