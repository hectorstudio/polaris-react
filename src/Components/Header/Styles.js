import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

// Animations
import { aFadeIn } from 'Helpers/Animations'

export const HeaderWrap = styled.header`
    height: ${props => props.theme.layout.header};
    width:calc(100% - 6rem);
    animation: ${`.5s ${aFadeIn} alternate`};
    margin:3rem auto;
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
    opacity: ${(props => props.visible ? '1' : '.2')};
    pointer-events: ${(props => props.visible ? 'initial' : 'none')};

    &:hover ${BackIcon} {
        color: ${(props => props.visible ? '#FFF' : '#93A4B6')};
    }
`;