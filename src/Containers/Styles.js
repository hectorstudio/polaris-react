import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const aFadeIn = keyframes`${fadeIn}`;

export const AppWrap = styled.main`
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const ContentWrap = styled.div`
    flex: 1 1 calc(100% - 28rem);
    max-width: calc(100% - 28rem);
    float:left;
    padding:5rem 5rem 5rem 4rem;
    animation: ${`.5s ${aFadeIn} alternate`};
    margin-left: 28rem;
`