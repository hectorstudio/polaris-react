import styled from 'styled-components';
import { media } from 'Styles/Utils';

export const LibraryListWrap = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding:5rem 3rem;

  ${media.desktop`
    padding:5rem 5rem 2rem;
  `}
`;

export const LibraryListItem = styled.div`
  flex: 1 0 auto;
  width: ${props => props.theme.card.width};
  max-width: ${props => props.theme.card.maxWidth};
  margin: ${props => props.theme.card.margin};
`;

export const LibraryListItemWide = styled.div`
  flex: 1 0 auto;
  width: ${props => props.theme.wideCard.width};
  max-width: ${props => props.theme.wideCard.maxWidth};
  margin: ${props => props.theme.wideCard.margin};
`;
