import React, { Fragment } from 'react';

import Scroll from 'Components/Scroll';
import LogoIcon from 'Components/Logo/LogoIcon';
import Navigation from './Navigation';

import { SidebarWrap, DashboardLink } from './Styles';

const SideBar = () => (
  <SidebarWrap>
    <Scroll>
      <Fragment>
        <DashboardLink to="/">
          <LogoIcon height="30" />
        </DashboardLink>
        <Navigation />
      </Fragment>
    </Scroll>
  </SidebarWrap>
);

export default SideBar;
