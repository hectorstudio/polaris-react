import React, { Component } from 'react'
import { Redirect } from 'react-router'

import { LoginWrap } from './Styles'

import Auth from 'Components/Auth'
import LoginForm from 'Components/LoginForm'

export default class Login extends Component {
    state = {
        redirectToReferrer: false,
        username: '',
        password: ''
    }
    
    handleLogin = (e) => {
        Auth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        })

        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });

        console.log(this.state.username);
    }

    render() { 
        const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        let LoginProps = {
            handleLogin: this.handleLogin,
            handleChange: this.handleChange
        }

        return ( 
            <LoginWrap>
                <LoginForm {...LoginProps} />
            </LoginWrap>
        )
    }
}