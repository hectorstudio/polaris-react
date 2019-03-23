import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = styled.header`
  float: left;
  width: 100%;
  margin: 0 0 3rem;
  border-bottom: 1px solid rgba(255,255,255, .05);
`;

export const HeaderIconWrap = styled.div`
  float:left;
  width:6rem;
  height:6rem;
  text-align:center;
  border-right: 1px solid rgba(255,255,255, .05);
  cursor:pointer;

  &:hover {
    svg {
      opacity:1;
      color: ${props => props.theme.primary};
    }
  }
`;

export const HeaderIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  opacity: .8;
  color: #FFF;
  height: 6rem;
  text-align:center;
  transition: .2s all;
`;