import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Animations
import { aFadeIn } from 'Styles/Animations';

export const HeaderWrap = styled.header`
    height: auto;
    width: calc(100% - ${props => props.theme.layout.sidebar});
    animation: ${`.5s ${aFadeIn} alternate`};
    display:flex;
    padding: 3rem;
    background-color: rgba(0,0,0,.25);
    position:fixed;
    top:0;
    left: ${props => props.theme.layout.sidebar}
`;

export const LogoutIcon = styled(FontAwesomeIcon)`
    color:${props => props.theme.secondary};
    font-size:1.6rem;
    transition:.2s all;
`;

export const LogoutButton = styled.button`
    width: ${props => props.theme.layout.header};
    height:${props => props.theme.layout.header};
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
