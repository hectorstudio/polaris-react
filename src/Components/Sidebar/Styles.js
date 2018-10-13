import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { transparentize } from 'polished';

export const SidebarWrap = styled.nav`
    width: ${props => props.theme.layout.sidebar};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background:${props => props.theme.background && transparentize(0.5, props.theme.background)};
    z-index:2;
`;

export const HomeLink = styled(NavLink)`
    width: 6rem;
    height:6rem;
    padding:1.5rem;
    align-self: center;
    margin: auto;
`;

export const DashboardLink = styled(NavLink)`
  float:left;
  padding:1rem 2rem 0 0;
  margin:3rem 3rem 0;
  position:relative;
`;

export const NavItemWrap = styled.section`
  float:left;
  width:100%;
  margin:0 0 3rem;
  padding:0 3rem;
  &:first-of-type {
    margin-top: 4rem;
  }
`;

export const NavItemHeading = styled.h5`
    font-size:1rem;
    letter-spacing:.2rem;
    font-weight:800;
    margin:0 0 1.5rem;
    text-transform:uppercase;
    color: ${props => props.theme.secondary};
    opacity: .25;
`;

export const NavItemLink = styled(NavLink)`
    font-size:1.4rem;
    letter-spacing: .1rem;
    line-height: 1.5;
    font-weight:400;
    margin:0 0 1rem;
    color: ${props => props.theme.light};
    opacity:.6;
    float:left;
    width:100%;
    transition:.2s all;

    &.active {
      opacity:1;
      color: ${props => props.theme.primary};
    }

    &:hover {
        opacity: 1;
    }
`;
