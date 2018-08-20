import React, { Component } from 'react';
import Modal from 'Components/Modal';

// Global Styles
import { PageHeading } from 'Styles';

// Local Styles
import { LibraryHeader } from './Styles';

export default class Header extends Component {
    state = {
      modalOpen: false,
    }

    _addLibrary = (kind) => {

    }

    _toggleModal = (modalOpen) => {
      this.setState({
        modalOpen: !this.state.modalOpen,
      });
    }

    render() {
      const { heading, button } = this.props;

      return (
        <LibraryHeader>
          <PageHeading>{heading}</PageHeading>
          <button onClick={this._toggleModal}>{button}</button>
          <Modal contentLabel="Add Movie Library" isOpen={this.state.modalOpen} onClose={this._toggleModal}>Modal</Modal>
        </LibraryHeader>
      );
    }
}
