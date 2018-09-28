import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderWrap = styled.header`
    height: ${props => props.theme.layout.header};
    width: calc(100% - ${props => props.theme.layout.sidebar});
    display:flex;
    padding: 1.5rem 1.5rem 1.5rem 3rem;
    position:fixed;
    top:0;
    background:rgba(0,0,0, .4);
    left: ${props => props.theme.layout.sidebar};
    z-index:5;
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
