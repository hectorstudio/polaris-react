import React from 'react';

import { PageHeading } from 'Styles';
import ContentWrap from 'Containers/ContentWrap';
import DashboardWrap from './Styles';

const Dashboard = () => (
  <ContentWrap>
    <DashboardWrap>
      <PageHeading>Dashboard</PageHeading>
    </DashboardWrap>
  </ContentWrap>
);

export default Dashboard;
