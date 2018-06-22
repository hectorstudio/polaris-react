import React, { Component } from 'react';

import { LoginButton } from './Styles'

export default class Button  extends Component {
    state = {
        disabled: false
    }

    _handleLogin = e => {
        e.preventDefault();

        if(!this.state.disabled) {
            this.props.handleLogin();

            this.setState({ disabled: true });

            setTimeout(() => {
                this.setState({ disabled: false });
            }, 1000);
        }
    }

    render() { 
        return (
            <LoginButton 
                type="submit" 
                onClick={ this._handleLogin } 
                disabled={ (this.state.disabled || this.props.disabled ? true : false) }>
                    {this.props.value}
            </LoginButton> 
        )
    }
}