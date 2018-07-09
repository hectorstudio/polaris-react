import styled from 'styled-components';

// Animations
import { aFadeIn } from 'Helpers/Animations'

export const AppWrap = styled.main`
    display: flex;
    height: 100vh;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: ${props => props.authed ? 'initial' : 'center'};
`;

export const ContentWrap = styled.div`
    flex: 1 1 auto;
    max-width:  calc(100% - ${props => props.theme.layout.sidebar});
    height:calc(100vh - ${props => props.theme.layout.header});
    float:left;
    animation: ${`.5s ${aFadeIn} alternate`};
    margin: 0 0 0 ${props => props.theme.layout.sidebar};
`