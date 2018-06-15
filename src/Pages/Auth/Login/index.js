import React, { Component } from 'react'
import { Redirect } from 'react-router'

import { LoginWrap } from './Styles'

import { AUTH_REQUEST, Auth } from 'Actions/Auth'
import LoginForm from 'Components/LoginForm'

export default class Login extends Component {
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

        if (this.props.username || this.props.password) this.setState({error: true});

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
            error: false
        }

        return ( 
            <LoginWrap>
                <LoginForm {...LoginProps} />
            </LoginWrap>
        )
    }
}