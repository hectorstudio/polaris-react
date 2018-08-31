import React from 'react';
import PropTypes from 'prop-types';

import LogoIcon from 'Components/Logo/LogoIcon';
import { FormWrap } from '../Styles';

import Title from '../Components/Title';
import Input from '../Components/Input';
import Button from '../Components/Button';
import FormLink from '../Components/FormLink';
import ForgotPassword from '../Components/ForgotPassword';

const LoginForm = ({
  error,
  handleChange,
  handleLogin,
  disabled,
}) => (
  <React.Fragment>
    <FormWrap error={error}>
      <LogoIcon alt="Olaris" height="35" />
      <Title heading="Welcome Back!" sub="Login to get started" />

      <Input type="text" name="username" autocomplete="username" placeholder="Enter Username" handleChange={handleChange} />
      <Input type="password" name="password" autocomplete="password" placeholder="Enter Password" handleChange={handleChange} />
      <Button handleSubmit={handleLogin} value="Login" disabled={disabled} />

      <FormLink to="/register" strapline="Don't Have An Account?" value="Sign Up" setup={false} />
    </FormWrap>

    <ForgotPassword to="/forgot" value="Forgot Password?" />
  </React.Fragment>
);

LoginForm.propTypes = {
  error: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

LoginForm.defaultProps = {
  disabled: false,
};

export default LoginForm;
