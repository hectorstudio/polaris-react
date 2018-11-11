import styled from 'styled-components';

export const LibraryListWrap = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding:3rem 3rem 1.5rem; 
    align-items: center;
    justify-content: center;
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

export const NoResults = styled.span`
  float: left;
  width: 100%;
  font-weight: 600;
  line-height: 4rem;
  font-size: 1.4rem;
  text-align: center;
  color: #FFF;
  width: calc(100% - 2rem);
  margin:0 1rem;

  button {
    background:none;
    border:none;
    color:${props => props.theme.primary};
    font-weight:600;

    &:hover {
      text-decoration:underline;
    }
  }
`;
