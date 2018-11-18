import styled from 'styled-components';
import { transparentize } from 'polished';

export const List = styled.ul`
  width:55%;
  background:${props => props.theme.text};
  margin:0 0 3rem;
  overflow:hidden;
  position:relative;
`;

export const ListHeading = styled.li`
  width:100%;
  padding:0 2rem;
  border-bottom:1px solid #0a0a0b;
  line-height:5rem;
  text-transform:capitalize;
  font-weight:600;
  color:#FFF;
  background:${props => props.theme.background && transparentize(0.1, props.theme.background)};
`;
