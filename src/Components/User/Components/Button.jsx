import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormButton } from '../Styles';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: props.disabled,
      throttle: false,
    };
  }

  componentDidMount() {
    const { disabled } = this.props;

    this.setState({ disabled });
  }

  componentWillReceiveProps(nextProps) {
    const { disabled } = this.props;

    if (nextProps.disabled !== disabled) {
      this.setState({ disabled: nextProps.disabled });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.throttle);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { disabled } = this.state;
    const { handleSubmit } = this.props;

    if (!disabled) {
      handleSubmit();

      this.setState({ throttle: true });

      this.throttle = setTimeout(() => {
        this.setState({ throttle: false });
      }, 1000);
    }
  }

  render() {
    const { throttle, disabled } = this.state;
    const { value } = this.props;

    console.log(throttle, disabled)

    return (
      <FormButton
        type="submit"
        onClick={this.handleSubmit}
        disabled={(!!(throttle || disabled))}
      >
        {value}
      </FormButton>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
