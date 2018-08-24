import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import ModalClose from './ModalClose';

import { StyledModal, Container } from './Styles';

StyledModal.setAppElement('#olaris');

const ModalBox = ({
  isOpen,
  contentLabel,
  children,
  onClose,
  className,
  tall,
  noCloseLabel,
  ...props
}) => (
  <StyledModal
    isOpen={isOpen}
    contentLabel={contentLabel}
    onRequestClose={onClose}
    className={className}
    tall={tall}
    {...props}
  >
    <Container className={className}>
      {noCloseLabel || <ModalClose onClick={onClose} />}
      {children}
    </Container>
  </StyledModal>
);

ModalBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  className: PropTypes.string,
  tall: PropTypes.bool,
  noCloseLabel: PropTypes.bool,
};

ModalBox.defaultProps = {
  className: '',
  onClose: noop,
  tall: false,
  noCloseLabel: false,
};

export default ModalBox;
