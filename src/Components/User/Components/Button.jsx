import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormButton } from '../Styles';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      throttle: false,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.throttle);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { throttle } = this.state;
    const { handleSubmit } = this.props;

    if (!throttle) {
      handleSubmit();

      this.setState({ throttle: true });

      this.throttle = setTimeout(() => {
        this.setState({ throttle: false });
      }, 1000);
    }
  }

  render() {
    const { throttle } = this.state;
    const { value } = this.props;

    return (
      <FormButton
        type="submit"
        onClick={this.handleSubmit}
        disabled={throttle}
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
