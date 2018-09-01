import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Animations
import { aFadeIn } from 'Styles/Animations';

export const SidebarWrap = styled.nav`
    width: ${props => props.theme.layout.sidebar};
    position: fixed;
    top: ${props => props.theme.layout.header};
    left: 0;
    height: calc(100vh - ${props => props.theme.layout.header});
    background-image: linear-gradient(to bottom, #1a1a2c 0%,${props => props.theme.lighten.background} 100%);
    animation: ${`.5s ${aFadeIn} alternate`};
    padding:3rem;
    z-index:2;
    border-right:1px solid ${props => props.theme.border};
`;

export const HomeLink = styled(Link)`
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
    &:first-of-type {
        margin-top:2rem;
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

export const NavItemLink = styled(Link)`
    font-size:1.4rem;
    letter-spacing: .1rem;
    line-height: 1.5;
    font-weight:600;
    margin:0 0 1rem;
    color: ${props => props.theme.light};
    opacity:.6;
    float:left;
    width:100%;
    transition:.2s all;

    &:hover {
        opacity: 1;
    }
`;
