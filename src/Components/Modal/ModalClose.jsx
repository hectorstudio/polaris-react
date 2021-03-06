import React from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ModalCloseButton } from './Styles';

const ModalClose = ({ onClick }) => (
  <ModalCloseButton icon={faTimes} onClick={onClick}>Close</ModalCloseButton>
);

export default ModalClose;

ModalClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};
