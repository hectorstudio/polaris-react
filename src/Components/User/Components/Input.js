import React, { Component } from 'react'

import { InputWrap, TextInput, UniqueInput } from '../Styles'

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
        const { type, name, placeholder, handleChange, uniqueCode, autocomplete, value } = this.props;

        let inputProps = {
            value,
            type,
            name,
            placeholder,
            autoComplete: autocomplete,
            onChange: handleChange,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
        }

        return ( 
            <InputWrap isFocused={this.state.isFocused} uniqueCode={uniqueCode}>
                { uniqueCode && 
                    <UniqueInput {...inputProps} />
                }
                {!uniqueCode &&
                    <TextInput {...inputProps} />
                }
            </InputWrap>
         )
    }
}
 