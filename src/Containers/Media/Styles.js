import styled from 'styled-components';
import { media } from 'Styles/Utils';

export const LibraryListWrap = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding:3rem .5rem 0rem;

  ${media.desktop`
    padding:4rem 3rem 0;
  `}

  ${media.large`
    padding:5rem 4rem 2rem;
  `}
`;

export const LibraryListItem = styled.div`
  flex: 1 0 auto;
  width:calc(50% - 2rem);
  max-width:calc(50% - 2rem);
  margin: 0 1rem 2rem;

  ${media.mobile`
    width:calc(33.3333% - 3rem);
    max-width:calc(33.3333% - 3rem);
    margin: ${props => props.theme.card.margin};
  `}

  ${media.tablet`
    width:calc(25% - 3rem);
    max-width:calc(25% - 3rem);
    margin: ${props => props.theme.card.margin};
  `}

  ${media.desktop`
    width:calc(25% - 3rem);
    max-width:calc(25% - 3rem);;
  `}

  ${media.large`
    width: ${props => props.theme.card.width};
    max-width: ${props => props.theme.card.maxWidth};
  `}
`;

export const LibraryListItemWide = styled.div`
  flex: 1 0 auto;
  width:calc(100% - 2rem);
  max-width:calc(100% - 2rem);
  margin: 0 1rem 2rem;

  ${media.mobile`
    width: ${props => props.theme.wideCard.width};
    max-width: ${props => props.theme.wideCard.maxWidth};
    margin: ${props => props.theme.wideCard.margin};
  `}

  ${media.tablet`
    width:calc(50% - 3rem);
    max-width:calc(50% - 3rem);
    margin: ${props => props.theme.card.margin};
  `}

  ${media.large`
    width: ${props => props.theme.wideCard.width};
    max-width: ${props => props.theme.wideCard.maxWidth};
    margin: ${props => props.theme.wideCard.margin};
  `}
`;
