import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const AlertIcon = (type) => {
  switch (type) {
    case 'error':
      return <FontAwesomeIcon icon={faExclamationCircle} color="#E83C50" size="2x" />;
    case 'info':
      return <FontAwesomeIcon icon={faQuestionCircle} color="#4C6EAC" size="2x" />;
    case 'success':
      return <FontAwesomeIcon icon={faCheckCircle} color="#81A35A" size="2x" />;
    default:
      return false;
  }
};

AlertIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AlertIcon;
