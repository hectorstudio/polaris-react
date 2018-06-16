import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { withAlert } from 'react-alert'

import { LoginWrap } from './Styles'

import { AUTH_REQUEST, Auth } from 'Actions/Auth'
import LoginForm from 'Components/LoginForm'

class Login extends Component {
    state = {
        redirectToDashboard: false,
        success: false,
        error: false,
        disabled: true,
        username: '',
        password: ''
    }

    componentWillMount() {
        if (Auth.isAuthenticated) this.setState({ redirectToDashboard: true });
    }
    
    _handleLogin = () => {
        // Login Request
        AUTH_REQUEST(this.state.username, this.state.password).then(response => {
            this.setState({ success: true });

            // Allow Successful Login Fade Out
            setTimeout(() => {
                this.setState({ redirectToDashboard: true });
            }, 500);
        }).catch(error => {
            this.setState({ error: true }, () => {
                this.props.alert.error('Looks like your Username and Password dont match, Please Try Again');
            });
        })
    }

    _handleChange = e => {
        let emptyInput = (this.state.username.length < 1 || this.state.password.length < 1);

        this.setState({ 
            [e.target.name]: e.target.value,
            disabled: (!emptyInput ? false : true)
        });
    }

    render() { 
        const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
        const { redirectToDashboard } = this.state;

        if (redirectToDashboard) {
            return <Redirect to={from} />;
        }

        let LoginProps = {
            handleLogin: this._handleLogin,
            handleChange: this._handleChange,
            error: this.state.error,
            disabled: this.state.disabled
        }

        return ( 
            <LoginWrap success={this.state.success}>
                <LoginForm {...LoginProps} />
            </LoginWrap>
        )
    }
}

export default withAlert(Login)