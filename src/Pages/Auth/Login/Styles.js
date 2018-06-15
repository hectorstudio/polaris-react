import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const aFadeIn = keyframes`${fadeIn}`;

export const LoginWrap = styled.section`
    display: flex;
    max-width: 45rem;
    width: 100%;
    align-self: center;
    margin: 0 auto;
    flex-direction: column;
    animation: .75s ${aFadeIn} alternate;
`;