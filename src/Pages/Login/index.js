import React, { Component } from 'react'
import { Redirect } from 'react-router'

import Auth from 'Components/Auth'

import { LoginWrap } from './Styles'

import Form from './Form'
import ForgotPassword from './ForgotPassword'

export default class Login extends Component {e
    state = {
        redirectToReferrer: false
    }
    
    login = () => {
        Auth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        })
    }

    render() { 
        const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return ( 
            <LoginWrap>
                <Form login={this.login} />
                <ForgotPassword />
            </LoginWrap>
        )
    }
}