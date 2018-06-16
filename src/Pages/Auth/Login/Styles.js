import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeOut } from 'react-animations';

const loginFadeIn = keyframes`${fadeIn}`;
const loginFadeOut = keyframes`${fadeOut}`;

export const LoginWrap = styled.section`
    display: flex;
    max-width: 45rem;
    width: 100%;
    align-self: center;
    margin: 0 auto;
    flex-direction: column;
    animation: ${ (props => props.success ? `.25s ${loginFadeOut} forwards` : `.5s ${loginFadeIn} alternate`) };
`;