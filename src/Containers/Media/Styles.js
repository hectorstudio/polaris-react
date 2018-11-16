import styled from 'styled-components';

export const LibraryListWrap = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding:4rem 3rem 1.5rem; 
    align-items: center;
    justify-content: center;
`;

export const LibraryListItem = styled.div`
  flex: 1 0 auto;
  min-width: ${props => props.theme.card.width};
  max-width: ${props => props.theme.card.maxWidth};
  margin: ${props => props.theme.card.margin};
`;

export const LibraryListItemWide = styled.div`
  flex: 1 0 auto;
  width: ${props => props.theme.wideCard.width};
  max-width: ${props => props.theme.wideCard.maxWidth};
  margin: ${props => props.theme.wideCard.margin};
`;
