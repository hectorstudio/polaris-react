import React from 'react';

import Scroll from 'Components/Scroll';
import Navigation from './Navigation';
import LogoIcon from 'Components/Logo/LogoIcon';

import { SidebarWrap, DashboardLink } from './Styles';

const SideBar = () => (
  <SidebarWrap>
    <Scroll>
      <React.Fragment>
        <DashboardLink to="/">
          <LogoIcon height="30" />
        </DashboardLink>
        <Navigation />
      </React.Fragment>
    </Scroll>
  </SidebarWrap>
);

export default SideBar;
