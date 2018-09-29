import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import FetchLibraryList from 'Queries/fetchLibraries';
import { ADD_LIBRARY } from 'Mutations/manageLibraries';

import Modal from 'Components/Modal';
import AddLibrary from './AddLibrary';

import { ModalHeader, ModalHeading, ModalBody } from './Styles';

class AddLibraryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      error: false,
      errorMessage: '',
    };
  }

  addLibrary = (filePath) => {
    const { type, mutate } = this.props;
    const kind = (type === 'movies' ? 0 : 1);

    mutate({
      variables: {
        name: type,
        kind,
        filePath,
      },
    })
      .then(() => {
        this.setState({
          added: true,
        });

        console.log('test');
      })
      .catch((error) => {
        console.log(error);

        this.setState({
          error: true,
          errorMessage: error,
        });
      });
  }

  render() {
    const {
      contentLabel,
      onClose,
      type,
      isOpen,
    } = this.props;
    const { added } = this.state;

    const Heading = `Manage ${type} folders`;

    return (
      <Modal contentLabel={contentLabel} isOpen={isOpen} onClose={() => (onClose(isOpen))} added={added}>
        <ModalHeader>
          <ModalHeading>
            {Heading}
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <FetchLibraryList type={type} />
          <AddLibrary addLibrary={this.addLibrary} />
        </ModalBody>
      </Modal>
    );
  }
}

AddLibraryModal.propTypes = {
  type: PropTypes.string.isRequired,
  contentLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  mutate: PropTypes.func.isRequired,
};

export default AddLibraryModal = graphql(ADD_LIBRARY)(AddLibraryModal);
