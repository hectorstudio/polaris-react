import styled from 'styled-components';
import { media } from 'Styles/Utils';

export const ListWrap = styled.ul`
  min-width: 100%;
  margin:0 0 2rem;
`;

export const ListItem = styled.li`
  display:none;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 1rem 1rem 0;
  max-width: 30rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:after {
    content: '-';
    color: rgba(255, 255, 255, .25);
    padding-left: 1rem;
  }

  &:last-child {
    font-weight: 600;

    &:after {
      display:none;
    }
  }

  &:nth-last-child(-n+2) {
    display:inline-block;
  }

  a {
    color: rgba(255, 255, 255, .25);
    transition: 0.2s all;

    &:hover {
      color: #ffffff;
    }
  }

  ${media.tablet`
    display: inline-block;

    &:nth-last-child(-n+2) {
      display: inline-block;
    }
  `}
`;
