import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const activeClassName = 'selected'

const NavItem = styled(NavLink).attrs({
    activeClassName
}) `
    color: blue;

    &.${activeClassName} {
        color: black;
    }
`;

const LibraryLink = ({name}) => (
    <li>
        <NavItem to={`/library/${name.toLowerCase()}`} activeClassName={activeClassName}>{name}</NavItem>
    </li>
)

export default LibraryLink