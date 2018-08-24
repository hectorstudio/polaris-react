import React from 'react';
import PropTypes from 'prop-types';

const ModalClose = ({ onClick }) => (
  <button type="submit" onClick={onClick}>
        Close
  </button>
);

ModalClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalClose;
