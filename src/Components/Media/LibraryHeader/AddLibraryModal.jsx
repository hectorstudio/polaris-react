import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { FetchLibraryList, FETCH_LIBRARIES } from 'Queries/fetchLibraries';
import { ADD_LIBRARY } from 'Mutations/manageLibraries';

import { AlertInline } from 'Components/Alerts';
import Modal from 'Components/Modal';
import AddLibrary from './AddLibrary';

import { ModalHeader, ModalHeading, ModalBody } from './Styles';

class AddLibraryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedLibraries: [],
      error: false,
      errorMessage: '',
    };
  }

  addLibrary = (filePath) => {
    const { type, mutate } = this.props;
    const { addedLibraries } = this.state;

    const kind = (type === 'movies' ? 0 : 1);

    mutate({
      variables: {
        name: type,
        kind,
        filePath,
      },
      refetchQueries: [{ query: FETCH_LIBRARIES }],
    })
      .then((res) => {
        const { library } = res.data.createLibrary;

        this.setState({
          addedLibraries: [
            ...addedLibraries,
            {
              filePath: library.filePath,
              id: library.id,
            },
          ],
        });
      })
      .catch((error) => {
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
    const { error, errorMessage } = this.state;

    const Heading = `Manage ${type} folders`;

    return (
      <Modal contentLabel={contentLabel} isOpen={isOpen} onClose={() => (onClose(isOpen))}>
        <ModalHeader>
          <ModalHeading>
            {Heading}
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          {error && <AlertInline type="error">{errorMessage}</AlertInline>}
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
