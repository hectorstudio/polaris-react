import React from 'react';
import FetchSeriesList from 'Queries/fetchSeriesList';
import Empty from 'Components/Media/Card/Empty';

// Local Styles
import { PageHeading } from 'Styles';
import { LibraryWrap, LibraryListWrap } from '../Styles';
// Global Styles

const SeriesList = () => (
  <LibraryWrap>
    <PageHeading>Series</PageHeading>

    <LibraryListWrap>
      <FetchSeriesList />
      <Empty length="10" />
    </LibraryListWrap>
  </LibraryWrap>
);

export default SeriesList;
