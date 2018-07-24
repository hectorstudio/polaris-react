import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Animations
import { aFadeIn } from 'Helpers/Animations'

export const SidebarWrap = styled.nav`
    width: ${props => props.theme.layout.sidebar};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    animation: ${`.5s ${aFadeIn} alternate`};
    padding:3rem;
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
        margin-top:5rem;
    }
`

export const NavItemHeading = styled.h5`
    font-size:1rem;
    letter-spacing:.2rem;
    font-weight:800;
    margin:0 0 1.5rem;
    text-transform:uppercase;
    color: ${props => props.theme.secondary};
    opacity: .75;
`

export const NavItemLink = styled(Link)`
    font-size:1.6rem;
    line-height: 1.5;
    font-weight:700;
    margin:0 0 1rem;
    color: ${props => props.theme.secondary};
    float:left;
    width:100%;
    transition:.2s all;

    &:hover {
        color: #FFF;
    }
`