import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const aFadeIn = keyframes`${fadeIn}`;

export const DashboardWrap = styled.section`
    display: flex;
    width: 100%;
    animation: ${`.5s ${aFadeIn} alternate`};
`;