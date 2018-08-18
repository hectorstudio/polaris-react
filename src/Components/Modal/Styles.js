import styled from 'styled-components'
import ReactModal from 'react-modal'

export const StyledModal = styled(ReactModal)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: ${({ tall }) => (tall ? 'flex-start' : 'center')};
  justify-content: center;
  background-color: rgba(29, 49, 65, 0.8);
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 1.2rem;
  z-index: 1031;
`;
StyledModal.displayName = 'StyledModal';

export const Container = styled.div`
  background-color: #FFF;
  max-width: 70rem;
  padding: 3rem 2rem;
  position: relative;
`;
Container.displayName = 'Container';

export const ModalClose = styled.span`
    display:block;
`