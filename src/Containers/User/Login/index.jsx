import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { withAlert } from 'react-alert';

import { AUTH_REQUEST, Auth } from 'Client/Auth';
import LoginForm from 'Components/User/Login';
import LoginWrap from './Styles';

class Login extends Component {
    state = {
      redirectToDashboard: false,
      success: false,
      error: false,
      isMounted: false,
      username: '',
      password: '',
      validForm: false,
    }

    componentWillMount() {
      if (Auth.isAuthenticated) this.setState({ redirectToDashboard: true });
      this.setState({ isMounted: true });
    }

    componentWillUnmount() {
      this.setState({ isMounted: false });
    }

    handleLogin = () => {
      const { username, password, validForm } = this.state;
      const { alert } = this.props;

      if (validForm) {
        AUTH_REQUEST(username, password).then(() => {
          this.setState({ success: true });

          setTimeout(() => {
            this.setState({ redirectToDashboard: true });
          }, 750);
        }).catch(() => {
          this.setState({ error: true }, () => {
            alert.error('Looks like your Username and Password dont match, Please Try Again');
          });
        });
      }
    }

    handleChange = (e) => {
      const { isMounted } = this.state;

      if (isMounted) {
        this.setState({
          [e.target.name]: e.target.value,
        }, () => {
          this.validateForm();
        });
      }
    }

    validateForm = () => {
      const { username, password } = this.state;
      this.setState({ validForm: (username.length > 3 && password.length > 3) });
    }

    render() {
      const { error, success, validForm } = this.state;
      const { location } = this.props;

      const { from } = location.state || { from: { pathname: '/dashboard' } };
      const { redirectToDashboard } = this.state;

      if (redirectToDashboard) return <Redirect to={from} />;

      const LoginProps = {
        handleLogin: this.handleLogin,
        handleChange: this.handleChange,
        error,
        validForm,
      };

      return (
        <LoginWrap success={success}>
          <LoginForm {...LoginProps} />
        </LoginWrap>
      );
    }
}

export default withAlert(Login);
