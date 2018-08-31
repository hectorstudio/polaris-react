import React from 'react';

import LogoIcon from 'Components/Logo/LogoIcon';
import Navigation from './Navigation';

import { SidebarWrap, DashboardLink } from './Styles';

const SideBar = () => (
  <SidebarWrap>
    <DashboardLink to="/">
      <LogoIcon height="30" />
    </DashboardLink>
    <Navigation />
  </SidebarWrap>
);

export default SideBar;
