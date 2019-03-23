import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { Redirect } from 'react-router';
import { getUrlParameter } from 'Helpers';

import { Auth } from 'Client/Auth';
import CREATE_USER from 'Mutations/createUser';
import RegisterForm from 'Components/User/Register';

import UserFormWrap from '../Styles';

class Register extends Component {
    state = {
      error: false,
      redirectToDashboard: false,
      username: '',
      password: '',
      inviteCode: '',
      validForm: false,
      initialSetup: true,
      registeredSuccessful: false,
    }

    componentWillMount() {
      const { initialSetup } = this.props;

      if (Auth.isAuthenticated) this.setState({ redirectToDashboard: true });

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

    formError = (message) => {
      const { alert } = this.props;

      this.setState({ error: true }, () => {
        alert.error(`There was a problem with your request: ${message}`);
      });
    }

    handleRegister = () => {
      const {
        username,
        password,
        invite_code: inviteCode,
        validForm,
      } = this.state;

      if (validForm) {
        let registerInfo = {
          username,
          password,
        };

        if (inviteCode) {
          registerInfo = {
            ...registerInfo,
            code: inviteCode,
          };
        }

        CREATE_USER(registerInfo).then(() => {
          this.setState({ registeredSuccessful: true });
        }).catch((error) => {
          this.formError(error.response.data.message);
        });
      } else {
        this.formError('Please recheck your form');
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
        registeredSuccessful,
      } = this.state;

      if (registeredSuccessful) return <Redirect to={{ pathname: '/login', state: { registered: true } }} />;

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
        <UserFormWrap>
          <RegisterForm {...RegisterProps} />
        </UserFormWrap>
      );
    }
}

export default withAlert(Register);
