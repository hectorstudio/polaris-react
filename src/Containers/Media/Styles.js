import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const aFadeIn = keyframes`${fadeIn}`;

export const LibraryWrap = styled.div`
    width: 100%;
    float:left;
    padding:2.5rem;
    animation: ${`.5s ${aFadeIn} alternate`};
`;

export const LibraryListWrap = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const LibraryHeading = styled.h1`
    font-size:2rem;
    margin:0 0 2rem;
`;