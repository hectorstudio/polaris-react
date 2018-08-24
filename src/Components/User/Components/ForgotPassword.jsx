import React from 'react';
import PropTypes from 'prop-types';

import { ForgotPasswordLink } from '../Styles';

const ForgotPassword = ({ to, value }) => (
  <ForgotPasswordLink to={to} value={value}>
    {value}
  </ForgotPasswordLink>
);

ForgotPassword.propTypes = {
  value: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ForgotPassword;
