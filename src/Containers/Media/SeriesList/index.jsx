import React from 'react';

import Empty from 'Components/Media/Card/Empty';
import ContentWrap from 'Containers/ContentWrap';
import RenderSeriesList from './RenderSeriesList';

import { LibraryListWrap } from '../Styles';

const SeriesList = () => (
  <ContentWrap>
    <LibraryListWrap>
      <RenderSeriesList />
      <Empty />
    </LibraryListWrap>
  </ContentWrap>
);

export default SeriesList;
