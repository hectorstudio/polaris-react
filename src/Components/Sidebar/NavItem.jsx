import React from 'react';
import PropTypes from 'prop-types';
import { NavItemWrap, NavItemHeading, NavItemLink } from './Styles';

const NavItem = ({ name, links }) => {
  const LinkList = links.map((link => (
    <NavItemLink to={link.to} key={link.id}>{link.name}</NavItemLink>
  )));

  return (
    <NavItemWrap>
      <NavItemHeading>{name}</NavItemHeading>
      {LinkList}
    </NavItemWrap>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavItem;
