import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderWrap = styled.header`
    height: ${props => props.theme.layout.header};
    width: 100%;
    display:flex;
    padding: 1.5rem 1.5rem 1.5rem 3rem;
    position:fixed;
    top:0;
    background:rgba(0,0,0, .4);
    left: 0;
    z-index:5;
`;

export const DashboardLink = styled(Link)`
  float:left;
  padding:1rem 2rem 0 0;
  margin-right:3rem;
  position:relative;
`;

export const LogoutIcon = styled(FontAwesomeIcon)`
    color:${props => props.theme.secondary};
    font-size:1.6rem;
    transition:.2s all;
`;

export const LogoutButton = styled.button`
    width: 5rem;
    height:5rem;
    float:right;
    background:none;
    border:none;
    align-self: flex-end;
    margin-left: auto;

    &:hover ${LogoutIcon} {
        color: #FFF;
    }
`;

export const BackIcon = styled(FontAwesomeIcon)`
    color:${props => props.theme.secondary};
    font-size:2rem;
    transition:.2s all;
`;

export const BackButton = styled.button`
    width: ${props => props.theme.layout.header};
    height:${props => props.theme.layout.header};
    padding:1.5rem;
    background:none;
    border:0;
    float:left;
    opacity: ${(props => (props.visible ? '1' : '.2'))};
    pointer-events: ${(props => (props.visible ? 'initial' : 'none'))};

    &:hover ${BackIcon} {
        color: ${(props => (props.visible ? '#FFF' : props.theme.secondary))};
    }
`;
