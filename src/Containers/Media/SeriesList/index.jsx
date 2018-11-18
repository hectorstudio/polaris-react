import React from 'react';

import Empty from 'Components/Media/Card/Empty';
import RenderSeriesList from './RenderSeriesList';

import { LibraryListWrap } from '../Styles';

const SeriesList = () => (
  <LibraryListWrap>
    <RenderSeriesList />
    <Empty />
  </LibraryListWrap>
);

export default SeriesList;
