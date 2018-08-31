import styled from 'styled-components';

export const LibraryWrap = styled.div`
    height: calc(100vh - 10rem);
    width: 100%;
    padding: 5rem 5rem 0;
    margin: 10rem 0 0;
    overflow-y: scroll;
`;

export const LibraryListWrap = styled.section`
    width: calc(100% + 1.5rem);
    display: flex;
    flex-flow: row wrap;
    margin-left: -1.5rem;
`;
