import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const activeClassName = 'selected'

const NavItem = styled(NavLink).attrs({
    activeClassName
}) `
    color: black;

    &.${activeClassName} {
        color: red;
        font-weight: bold;
    }
`;

const LibraryLink = ({name}) => (
    <NavItem to={`/library/${name.toLowerCase()}`} activeClassName={activeClassName}>{name}</NavItem>
)

export default LibraryLink