import React from 'react'

import { NavItemWrap, NavItemHeading, NavItemLink } from './Styles'
 
const NavItem = (props) => {
    let LinkList = props.links.map((link, i) =>
        <NavItemLink to={link.to} key={i}>{link.name}</NavItemLink>
    );

    return (
        <NavItemWrap>
            <NavItemHeading>{props.name}</NavItemHeading>
            {LinkList}
        </NavItemWrap>
    )
}

export default NavItem