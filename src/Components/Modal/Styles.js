import styled, { keyframes } from 'styled-components';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { aFadeIn } from 'Styles/Animations';

const fadeInZoom = keyframes`
  from { 
    transform: scale(.9);
  }
  to { 
    transform: scale(1);
   }
`;

export const StyledModal = styled(ReactModal)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: ${({ tall }) => (tall ? 'flex-start' : 'center')};
  justify-content: center;
  background: rgba(0,0,0, .85);
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 1.2rem;
  z-index: 1031;
  opacity:0;
  animation:.2s ${aFadeIn} forwards;
`;
StyledModal.displayName = 'StyledModal';

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  max-width: 50rem;
  padding: 0;
  position: relative;
  animation: ${`.3s ${fadeInZoom} forwards`};
  border-radius:.3rem;
  box-shadow:0 0 25px rgba(0,0,0, .7);
`;
Container.displayName = 'Container';

export const ModalCloseButton = styled(FontAwesomeIcon)`
  position:absolute;
  top:0;
  right:0;
  color: #FFF;
  font-size:2rem;
  cursor:pointer;
  z-index:11;
  transition:.2s all;
  width: 5.9rem !important;
  height: 5.9rem;
  padding: 2rem;
`;

export const ModalHeader = styled.header`
  float:left;
  width:100%;
  max-width:60rem;
  width:100%;
  padding:2rem;
  border-bottom:1px solid rgba(0,0,0, .2);
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