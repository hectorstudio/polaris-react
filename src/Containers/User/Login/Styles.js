import styled from 'styled-components';
import { aFadeIn, aFadeOut } from 'Styles/Animations';

export const LoginWrap = styled.section`
    display: flex;
    max-width: 45rem;
    width: 100%;
    align-self: center;
    margin: 0 auto;
    flex-direction: column;
    animation: ${ (props => props.success ? `.25s ${aFadeOut} forwards` : `.5s ${aFadeIn} alternate`) };
`;