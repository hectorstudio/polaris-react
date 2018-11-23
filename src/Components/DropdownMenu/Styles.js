import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { aFadeInUp } from 'Styles/Animations';

export const DropdownContents = styled.div`
  position:absolute;
  top:4rem;
  right:0;
  background: #FFF;
  width:17.5rem;
  border-radius: .3rem;
  box-shadow: 0 0 25px rgba(0,0,0,.3);
  padding:.5rem;
  animation: ${`.2s ${aFadeInUp} alternate`};

  &:after {
    top:-1rem;
    right:1.5rem;
    border: solid transparent;
    content:"";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(213, 213, 213, 0);
    border-bottom-color: #FFF;
    border-width: 5px;
  }

  span, button {
    width:100%;
    float:left;
    line-height: 4rem;
    font-weight:600;
    padding:0 2rem;
    color:${props => props.theme.background};
    font-size:1.4rem;
    text-align:right;
    cursor:pointer;
    transition:.2s opacity;
    opacity:.7;
    border:0;
    border-bottom:1px solid #EEE;
    background:none;

    &:last-child {
      border-radius:0 0 .3rem .3rem;
      border-bottom:0;
    }

    &:first-child {
      border-radius:0 0 .3rem .3rem;
    }

    &:hover {
      opacity:1;
    }
  }

  button:disabled {
    opacity:.3;
    cursor:initial;

    &:hover {
      opacity:.3;
    }
  }
`;

export const DropdownToggle = styled.span`
  display: block;
  width: 4rem;
  height: 4rem;
  line-height: 3rem;
  text-align: center;
  cursor:pointer;
`;

export const DropdownIcon = styled(FontAwesomeIcon)`
  font-size:2rem;
  z-index:11;
  transition:.2s all;
  color: ${props => (props.isOpen ? props.theme.primary : '#FFF')};
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;
