import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparentize } from 'polished';

export const SidebarWrap = styled.nav`
  width: ${props => props.theme.layout.sidebar};
  position: fixed;
  top: ${props => props.theme.layout.header};
  left: 0;
  height: 100vh;
  background:${props => props.theme.background && transparentize(0.4, props.theme.background)};
  z-index:2;
`;

export const HomeLink = styled(NavLink)`
  width: 6rem;
  height:6rem;
  padding:1.5rem;
  align-self: center;
  margin: auto;
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

export const AddFolder = styled(FontAwesomeIcon)`
  position:absolute;
  top:0;
  right:0;
  font-size:1.6rem;
  color:#FFF;
  opacity:0;
  width:3rem !important;
  height:3rem;
  transition:.2s all;
  padding:.9rem;
  transform:translateY(.5rem);
`;

export const NavItemLink = styled(NavLink)`
  font-size:1.4rem;
  letter-spacing: .1rem;
  line-height: 3rem;
  font-weight:400;
  margin:0;
  color: ${props => props.theme.light};
  opacity:.6;
  float:left;
  width:100%;
  transition:.2s all;
  position:relative;
  overflow:hidden;

  &.active {
    opacity:1;
    color: ${props => props.theme.primary};
  }

  &:hover {
    opacity: 1;
     
    ${AddFolder} {
      opacity:.4;
      transform: translateY(0);

      &:hover {
        opacity:1;
      }
    }
  }
`;
