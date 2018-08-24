import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormButton } from '../Styles';

export default class Button extends Component {
    state = {
      disabled: false,
    }

    componentWillUnmount() {
      clearTimeout(this.throttle);
    }

    handleLogin = (e) => {
      e.preventDefault();

      const { disabled } = this.state;
      const { handleSubmit } = this.props;

      if (!disabled) {
        handleSubmit();

        // Throttle Button Clicks
        this.setState({ disabled: true });

        this.throttle = setTimeout(() => {
          this.setState({ disabled: false });
        }, 1000);
      }
    }

    render() {
      const { disabled } = this.state;
      const { value } = this.props;

      return (
        <FormButton
          type="submit"
          onClick={this.handleLogin}
          disabled={(!!(disabled || disabled))}
        >
          {value}
        </FormButton>
      );
    }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
