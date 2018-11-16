import React, { Fragment } from 'react';

import Scroll from 'Components/Scroll';
import Navigation from './Navigation';

import { SidebarWrap } from './Styles';

const SideBar = () => (
  <SidebarWrap>
    <Scroll>
      <Fragment>
        <Navigation />
      </Fragment>
    </Scroll>
  </SidebarWrap>
);

export default SideBar;
