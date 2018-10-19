import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NextArrow = styled(FontAwesomeIcon)`
  font-size:2rem;
  color:#FFF;
  cursor:pointer;
  position:absolute;
  top:-4rem;
  right:1.5rem;
  transition:.2s all;

  &.slick-disabled {
    opacity:.2;
    cursor:initial;
  }
`;

export const PrevArrow = styled(FontAwesomeIcon)`
  font-size:2rem;
  color:#FFF;
  cursor:pointer;
  position:absolute;
  top:-4rem;
  right:5rem;
  transition:.2s all;

  &.slick-disabled {
    opacity:.2;
    cursor:initial;
  }
`;
