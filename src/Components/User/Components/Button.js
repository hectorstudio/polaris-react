import React, { Component } from 'react';

import { FormButton } from '../Styles'

export default class Button  extends Component {
    state = {
        disabled: false
    }
    
    componentWillUnmount() {
        clearTimeout(this.throttle);
    }

    _handleLogin = e => {
        e.preventDefault();

        if(!this.state.disabled) {
            this.props.handleSubmit();

            // Throttle Button Clicks 
            this.setState({ disabled: true });

            this.throttle = setTimeout(() => {
                this.setState({ disabled: false });
            }, 1000);
        }
    }

    render() { 
        return (
            <FormButton 
                type="submit" 
                onClick={ this._handleLogin } 
                disabled={ (this.state.disabled || this.props.disabled ? true : false) }>
                    {this.props.value}
            </FormButton> 
        )
    }
}