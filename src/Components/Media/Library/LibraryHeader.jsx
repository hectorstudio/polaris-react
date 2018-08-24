import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'Components/Modal';

// Global Styles
import { PageHeading } from 'Styles';

// Local Styles
import LibraryHeader from './Styles';

export default class Header extends Component {
  state = {
    modalOpen: false,
  }

  addLibrary = () => {

  }

  toggleModal = (modalOpen) => {
    this.setState({
      modalOpen: !modalOpen,
    });
  }

  render() {
    const { heading, button } = this.props;
    const { modalOpen } = this.state;

    return (
      <LibraryHeader>
        <PageHeading>{heading}</PageHeading>
        <button type="submit" onClick={() => (this.toggleModal(modalOpen))}>{button}</button>
        <Modal contentLabel="Add Movie Library" isOpen={modalOpen} onClose={() => (this.toggleModal(modalOpen))}>Modal</Modal>
      </LibraryHeader>
    );
  }
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};
