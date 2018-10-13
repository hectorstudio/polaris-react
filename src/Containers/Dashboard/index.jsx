import React from 'react';

import { PageHeading } from 'Styles';
import RecentlyAddedSeriesSlider from 'Queries/fetchRecentlyAddedSeries';
import ContentWrap from 'Containers/ContentWrap';
import DashboardWrap from './Styles';

const Dashboard = () => (
  <ContentWrap>
    <DashboardWrap>
      <PageHeading>Dashboard</PageHeading>
      <RecentlyAddedSeriesSlider />
    </DashboardWrap>
  </ContentWrap>
);

export default Dashboard;
