import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FetchLibraryList from 'Queries/fetchLibraries';
import Modal from 'Components/Modal';

import { ModalHeader, ModalHeading } from './Styles';

export default class AddLibraryModal extends Component {
  addLibrary = () => {

  }

  render() {
    const {
      contentLabel,
      onClose,
      type,
      isOpen,
    } = this.props;

    const Heading = `Manage ${type} folders`;

    return (
      <Modal contentLabel={contentLabel} isOpen={isOpen} onClose={() => (onClose(isOpen))}>
        <ModalHeader>
          <ModalHeading>
            {Heading}
          </ModalHeading>
        </ModalHeader>
        <FetchLibraryList type={type} />
      </Modal>
    );
  }
}

AddLibraryModal.propTypes = {
  type: PropTypes.string.isRequired,
  contentLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
