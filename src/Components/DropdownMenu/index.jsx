import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DropdownToggle, DropdownContents, DropdownIcon } from './Styles';

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.closeModalIfOpen, false);
    document.addEventListener('keydown', this.closeModalIfOpen, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.closeModalIfOpen, false);
    document.removeEventListener('keydown', this.closeModalIfOpen, false);
  }


  closeModalIfOpen = (e) => {
    const { isOpen } = this.state;

    if (!this.dropdown.contains(e.target) && isOpen) {
      this.setState({ isOpen: false });
    }
  }

  handleToggle = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { icon, children, className } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={className} ref={(node) => { this.dropdown = node; }}>
        <DropdownToggle onClick={e => this.handleToggle(e)}>
          <DropdownIcon icon={icon} />
        </DropdownToggle>

        { isOpen && (
          <DropdownContents>
            {children}
          </DropdownContents>
        )}
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  icon: PropTypes.shape({
    iconName: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default DropdownMenu;
