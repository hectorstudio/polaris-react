import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparentize } from 'polished';

export const HeaderWrap = styled.header`
    height: ${props => props.theme.layout.header};
    width: calc(100% - ${props => props.theme.layout.sidebar});
    display:flex;
    position:fixed;
    top:0;
    background:${props => props.theme.background && transparentize(0.8, props.theme.background)};
    left:${props => props.theme.layout.sidebar};
    z-index:5;
`;

export const LogoutIcon = styled(FontAwesomeIcon)`
    color: #FFF;
    font-size:1.6rem;
    transition:.2s all;
`;

export const LogoutButton = styled.button`
    width: ${props => props.theme.layout.header};
    height: ${props => props.theme.layout.header};
    float:right;
    background:none;
    border:none;
    align-self: flex-end;
    margin-left: auto;
    transition:.2s background;

    &:hover {
      background: ${props => props.theme.background};
    }
`;
