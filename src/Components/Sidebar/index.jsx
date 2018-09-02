import React from 'react';

import Scroll from 'Components/Scroll';
import Navigation from './Navigation';

import { SidebarWrap } from './Styles';

const SideBar = () => (
  <SidebarWrap>
    <Scroll>
      <Navigation />
    </Scroll>
  </SidebarWrap>
);

export default SideBar;
