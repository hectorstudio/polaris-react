import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputWrap, TextInput, UniqueInput } from '../Styles';

export default class Input extends Component {
  state = {
    isFocused: false,
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
  }

  render() {
    const {
      type,
      name,
      placeholder,
      handleChange,
      uniqueCode,
      autocomplete,
      value,
    } = this.props;

    const { isFocused } = this.state;

    const inputProps = {
      value,
      type,
      name,
      placeholder,
      autoComplete: autocomplete,
      onChange: handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
    };

    return (
      <InputWrap isFocused={isFocused} uniqueCode={uniqueCode}>
        { uniqueCode
            && <UniqueInput {...inputProps} />
        }
        {!uniqueCode
            && <TextInput {...inputProps} />
        }
      </InputWrap>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  uniqueCode: PropTypes.bool,
  autocomplete: PropTypes.string.isRequired,
};

Input.defaultProps = {
  uniqueCode: false,
};
