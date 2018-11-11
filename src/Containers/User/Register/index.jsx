import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { Redirect } from 'react-router';
import { getUrlParameter } from 'Helpers';

import CREATE_USER from 'Mutations/createUser';
import RegisterForm from 'Components/User/Register';

import RegisterWrap from './Styles';

class Register extends Component {
    state = {
      error: false,
      redirectToDashboard: false,
      username: '',
      password: '',
      inviteCode: '',
      validForm: false,
      initialSetup: true,
    }

    componentWillMount() {
      const { initialSetup } = this.props;

      this.setState({
        inviteCode: getUrlParameter('invite_code'),
        initialSetup,
      });
    }

    handleChange = ({ target: { name, value } }) => {
      this.setState({
        [name]: value,
      }, () => {
        this.validateForm();
      });
    }

    validateForm = () => {
      const { username, password } = this.state;
      this.setState({ validForm: (username.length > 3 && password.length > 3) });
    }

    handleRegister = () => {
      const { alert } = this.props;

      const {
        username,
        password,
        invite_code: inviteCode,
        validForm,
        inviteCodeValid,
      } = this.state;

      if (validForm) {
        let registerInfo = {
          username,
          password,
        };

        if (inviteCode && inviteCodeValid) {
          registerInfo = {
            ...registerInfo,
            code: inviteCode,
          };
        }

        CREATE_USER(registerInfo).then(() => {
          this.setState({ redirectToDashboard: true });
        }).catch(() => {
          this.setState({ error: true }, () => {
            alert.error('Looks like there was an error, Please Try Again');
          });
        });
      }
    }

    render() {
      const { location } = this.props;
      const {
        redirectToDashboard,
        error,
        inviteCode,
        initialSetup,
        validForm,
      } = this.state;

      const { from } = location.state || { from: { pathname: '/dashboard' } };
      if (redirectToDashboard) return <Redirect to={from} />;

      const RegisterProps = {
        handleRegister: this.handleRegister,
        handleChange: this.handleChange,
        error,
        inviteCode,
        initialSetup,
        validForm,
      };

      return (
        <RegisterWrap>
          <RegisterForm {...RegisterProps} />
        </RegisterWrap>
      );
    }
}

export default withAlert(Register);
