import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import LogoIcon from 'Components/Logo/LogoIcon';
import { FormWrap } from '../Styles';

import Title from '../Components/Title';
import Input from '../Components/Input';
import Button from '../Components/Button';
import FormLink from '../Components/FormLink';

const RegisterForm = ({
  error,
  handleChange,
  handleRegister,
  disabled,
  initialSetup,
  inviteCode,
}) => (
  <Fragment>
    <FormWrap error={error}>
      <LogoIcon alt="Olaris" height="30" />
      <Title heading="Sign Up" sub="Account Registration" />

      {!initialSetup
        && (
          <Input
            type="text"
            value={(inviteCode || undefined)}
            name="invite_code"
            autocomplete="invite_code"
            placeholder="Enter Invite Code"
            handleChange={handleChange}
            uniqueCode
          />
        )
      }
      <Input type="text" name="username" autocomplete="new-username" placeholder="Enter Username" handleChange={handleChange} />
      <Input type="password" name="password" autocomplete="new-password" placeholder="Enter Password" handleChange={handleChange} />
      <Button handleSubmit={handleRegister} value="Register" disabled={disabled} />

      <FormLink to="/login" strapline="Have An Account?" value="Log In" setup={false} />
    </FormWrap>
  </Fragment>
);

RegisterForm.propTypes = {
  error: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  initialSetup: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  inviteCode: PropTypes.string,
};

RegisterForm.defaultProps = {
  disabled: false,
  inviteCode: '',
};

export default RegisterForm;
