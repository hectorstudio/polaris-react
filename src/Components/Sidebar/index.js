import React, { Component } from 'react';

import Logo from 'Components/Logo';
import Navigation from './Navigation';

import { SidebarWrap } from './Styles';

export default class Sidebar extends Component {
  render() {
    return (
      <SidebarWrap>
        <Logo height="30" />
        <Navigation />
      </SidebarWrap>
    );
  }
}
