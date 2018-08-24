import React from 'react';

import Logo from 'Components/Logo';
import Navigation from './Navigation';

import { SidebarWrap } from './Styles';

const SideBar = () => (
  <SidebarWrap>
    <Logo height="30" />
    <Navigation />
  </SidebarWrap>
);

export default SideBar;
