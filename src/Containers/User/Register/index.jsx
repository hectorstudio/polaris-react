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
      initialSetup: false,
    }

    componentWillMount() {
      const { initialSetup } = this.props;

      this.setState({
        inviteCode: getUrlParameter('invite_code'),
        initialSetup,
      });
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleRegister = () => {
      const { alert } = this.props;
      const { username, password, invite_code: inviteCode } = this.state;

      let registerInfo = {
        username,
        password,
      };

      if (inviteCode.length > 0) {
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

    render() {
      const { location } = this.props;
      const {
        redirectToDashboard,
        error,
        inviteCode,
        initialSetup,
      } = this.state;

      const { from } = location.state || { from: { pathname: '/dashboard' } };
      if (redirectToDashboard) return <Redirect to={from} />;

      const RegisterProps = {
        handleRegister: this.handleRegister,
        handleChange: this.handleChange,
        error,
        inviteCode,
        initialSetup,
      };

      return (
        <RegisterWrap>
          <RegisterForm {...RegisterProps} />
        </RegisterWrap>
      );
    }
}

export default withAlert(Register);
