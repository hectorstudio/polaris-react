import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparentize } from 'polished';

export const HeaderWrap = styled.header`
    height: ${props => props.theme.layout.header};
    width: 100%;
    display:flex;
    position:fixed;
    top:0;
    background:${props => props.theme.background && transparentize(0.2, props.theme.background)};
    left:0;
    z-index:5;
`;

export const LogoutIcon = styled(FontAwesomeIcon)`
    color: #FFF;
    font-size:1.6rem;
    transition:.2s all;
`;

export const LogoutButton = styled.button`
    width: ${props => props.theme.layout.header};
    height: ${props => props.theme.layout.header};
    float:right;
    background:none;
    border:none;
    align-self: flex-end;
    margin-left: auto;
    transition:.2s background;

    &:hover {
      background: ${props => props.theme.background};
    }
`;

export const DashboardHeader = styled.span`
  font-size:1.4rem;
  letter-spacing: .1rem;
  line-height: 1.5;
  font-weight:400;
  padding: 0 3rem;
  line-height: 10rem;
  float:left;
  width:${props => props.theme.layout.sidebar};
  transition:.2s all;
  background: rgba(0,0,0, .05);

  &.active {
    opacity:1;
    color: ${props => props.theme.primary};
  }

  &:hover {
      opacity: 1;
  }
`;
