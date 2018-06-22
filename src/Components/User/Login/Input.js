import React, { Component } from 'react'

import { LoginInputWrap, LoginInput } from './Styles'

export default class Input extends Component {
    state = {
        isFocused: false
    }

    handleFocus = () => {
        this.setState(state => ({ isFocused: true }));
    }

    handleBlur = () => {
        this.setState(state => ({ isFocused: false }));
    }

    render() { 
        const {type, name, placeholder, handleChange} = this.props;

        return ( 
            <LoginInputWrap isFocused={this.state.isFocused}>
                <LoginInput 
                    type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    onChange={handleChange} 
                    onFocus={this.handleFocus} 
                    onBlur={this.handleBlur}
                />
            </LoginInputWrap>
         )
    }
}
 