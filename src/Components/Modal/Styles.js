import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fadeInZoom = keyframes`
  from {
    opacity:0;
    transform: scale(.9);
  }
  to {
    opacity:1;
    transform: scale(1);
   }
`;

export const Modal = styled.div`
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100vh;
  background: #000000ab;
  z-index:99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled.div`
  opacity:0;
  max-width: 50rem;
  box-shadow:0 0 25px rgba(0,0,0, .4);
  animation: ${`.3s ${fadeInZoom} forwards`};
  border-radius:.3rem;
  background: ${props => props.theme.background};
`;

export const ModalCloseButton = styled(FontAwesomeIcon)`
  position:absolute;
  top:0;
  right:0;
  color: #FFF;
  font-size:2rem;
  cursor:pointer;
  z-index:11;
  transition:.2s all;
  width: 5.8rem !important;
  height: 5.8rem;
  padding: 2rem;
  transition: 0.2s all;

  &:hover {
    background: rgba(0, 0, 0, .1);
  }
`;

export const ModalHeader = styled.header`
  float:left;
  width:100%;
  max-width:60rem;
  width:100%;
  padding:2rem;
  background: rgba(0,0,0, .1);
`;

export const ModalHeading = styled.h3`
  font-size:1.8rem;
  color:#FFF;
  text-transform:capitalize;
  font-weight:600;
`;

export const ModalBody = styled.div`
  float:left;
  width:100%;
  padding:2rem;
`;
