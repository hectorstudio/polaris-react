import React from 'react';

import {
  NavWrap,
  NavList,
  NavItemLi,
  NavItem,
} from './Styles';

const Navigation = () => (
  <NavWrap>
    <NavList>
      <NavItemLi>
        <NavItem to="/movies">Movies</NavItem>
      </NavItemLi>
      <NavItemLi>
        <NavItem to="/series">TV Series</NavItem>
      </NavItemLi>
    </NavList>
  </NavWrap>
);

export default Navigation;
