import styled from 'styled-components'
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const HeaderWrap = styled.header`
    flex: 1 1 100%;
    display:flex;
    height: 6rem;
    background: #FFF;
    box-shadow: 0 10px 60px rgba(0,0,0, 0.05);
`;

export const HomeLink = styled(Link)`
    width: 6rem;
    height:6rem;
    padding:1.5rem;
    align-self: center;
    margin: auto;
`;

export const BackIcon = styled(FontAwesomeIcon)`
    color:#93A4B6;
    font-size:2rem;
    transition:.2s all;
`;

export const BackButton = styled.button`
    width: 6rem;
    height:6rem;
    padding:1.5rem;
    background:none;
    border:0;
    border-right:1px solid #F2F2F2;
    opacity: ${(props => props.visible ? '1' : '.2')};
    pointer-events: ${(props => props.visible ? 'initial' : 'none')};

    &:hover ${BackIcon} {
        color: ${(props => props.visible ? props.theme.darken.primary : '#93A4B6')};
    }
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
    border-left:1px solid #F2F2F2;

    &:hover ${LogoutIcon} {
        color: ${(props => props.theme.alerts.error)}
    }
`;