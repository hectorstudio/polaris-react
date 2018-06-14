import React, { Component } from 'react'
import { Redirect } from 'react-router'

import { LoginWrap } from './Styles'

import { AUTH_REQUEST, Auth } from 'Actions/Auth'
import LoginForm from 'Components/LoginForm'

export default class Login extends Component {
    state = {
        redirectToReferrer: false,
        username: '',
        password: ''
    }

    componentWillMount() {
        if (Auth.isAuthenticated) this.setState({ redirectToReferrer: true });
    }
    
    _handleLogin = e => {
        e.preventDefault();

        AUTH_REQUEST(this.state.username, this.state.password).then(response => {
            this.setState({ redirectToReferrer: true });
        })
    }

    _handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
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