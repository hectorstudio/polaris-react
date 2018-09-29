import styled, { keyframes } from 'styled-components';
import ReactModal from 'react-modal';

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

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #15151e;
  color: #ffffff25;
  line-height: 3.6rem;
  border: 1px solid #12121c;
  padding: 0 1rem;
  font-weight: 600;
  transition:.2s all;

  &:hover {
    background: transparent;
    color: #fff;
  }
`;
