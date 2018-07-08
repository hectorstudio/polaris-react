import styled from 'styled-components'
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const SidebarWrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background: #FFF;
    width: 24rem;
`;

export const HomeLink = styled(Link)`
    width: 6rem;
    height:6rem;
    padding:1.5rem;
    align-self: center;
    margin: auto;
`;

export const LogoutIcon = styled(FontAwesomeIcon)`
    color:#93A4B6;
    font-size:1.6rem;
    transition:.2s all;
`;

export const LogoutButton = styled.button`
    width: 6rem;
    height:6rem;
    padding:1.5rem;
    background:none;
    border:0;
    position:absolute;
    bottom:0;
    right:0;

    &:hover ${LogoutIcon} {
        color: ${(props => props.theme.alerts.error)}
    }
`;