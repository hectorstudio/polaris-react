import React, { Component } from 'react'
import { Redirect } from 'react-router'

import { LoginWrap } from './Styles'

import { AUTH_REQUEST, Auth } from 'Actions/Auth'
import LoginForm from 'Components/LoginForm'

import { withAlert } from 'react-alert'

class Login extends Component {
    state = {
        redirectToDashboard: false,
        error: false,
        username: '',
        password: ''
    }

    componentWillMount() {
        if (Auth.isAuthenticated) this.setState({ redirectToDashboard: true });
    }
    
    _handleLogin = e => {
        e.preventDefault();

        let empty = (this.state.username.length < 1 || this.state.password.length < 1);

        if (empty) { 
            this.setState({error: true});
            this.props.alert.error('Please ensure a valid Username & Password has been entered');

            return false;
        }

        AUTH_REQUEST(this.state.username, this.state.password).then(response => {
            this.setState({ redirectToDashboard: true });
        }).catch(error => {
            this.setState({ error: true })
        })
    }

    _handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
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
            error: this.state.error
        }

        return ( 
            <LoginWrap>
                <LoginForm {...LoginProps} />
            </LoginWrap>
        )
    }
}

export default withAlert(Login)