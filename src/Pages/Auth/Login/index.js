import React, { Component } from 'react'
import { Redirect } from 'react-router'

import { LoginWrap } from './Styles'

import { AUTH_TOKEN } from './token'

import Auth from 'Actions/Auth'
import LoginForm from 'Components/LoginForm'

export default class Login extends Component {
    state = {
        redirectToReferrer: false,
        username: '',
        password: ''
    }
    
    _handleLogin = e => {
        e.preventDefault();
        
        Auth(this.state.username, this.state.password);
    }

    _handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    }

    _confirm = async () => {
        // ... you'll implement this in a bit
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    render() { 
        const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        let LoginProps = {
            handleLogin: this._handleLogin,
            handleChange: this._handleChange
        }

        return ( 
            <LoginWrap>
                <LoginForm {...LoginProps} />
            </LoginWrap>
        )
    }
}