import React from 'react';

import Empty from 'Components/Media/Card/Empty';
import ContentWrap from 'Containers/ContentWrap';
import LibraryHeader from 'Components/Media/LibraryHeader';
import RenderSeriesList from './RenderSeriesList';

import { LibraryListWrap } from '../Styles';

const SeriesList = () => (
  <ContentWrap>
    <LibraryListWrap>
      <LibraryHeader type="series" button="Manage Series" />
      <RenderSeriesList />
      <Empty />
    </LibraryListWrap>
  </ContentWrap>
);

export default SeriesList;
