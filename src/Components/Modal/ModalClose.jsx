import React from 'react';
import PropTypes from 'prop-types';

import { ModalCloseButton } from './Styles';

const ModalClose = ({ onClick }) => (
  <ModalCloseButton onClick={onClick}>Close</ModalCloseButton>
);

ModalClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalClose;
