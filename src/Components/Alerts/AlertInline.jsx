import React from 'react';
import PropTypes from 'prop-types';

import { AlertInlineWrap } from './Styles';

const AlertInline = ({ type, children }) => (
  <AlertInlineWrap type={type}>{children}</AlertInlineWrap>
);

AlertInline.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'error']),
  children: PropTypes.node.isRequired,
};

AlertInline.defaultProps = {
  type: 'info',
};

export default AlertInline;
