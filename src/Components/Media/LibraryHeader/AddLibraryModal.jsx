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
      error: false,
      errorMessage: '',
      kind: 0,
    };
  }

  componentDidMount() {
    const { type } = this.props;

    this.setState({
      kind: (type === 'movies' ? 0 : 1),
    });
  }

  addLibrary = (filePath) => {
    const { type, mutate } = this.props;
    const { kind } = this.state;

    mutate({
      variables: {
        name: type,
        kind,
        filePath,
      },
      refetchQueries: [{ query: FETCH_LIBRARIES }],
    })
      .then((res) => {
        const { error } = res.data.deleteLibrary;

        if (error) {
          this.setState({
            error: true,
            errorMessage: error.message,
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMessage: error.message,
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
    const { error, errorMessage, kind } = this.state;

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
          <FetchLibraryList kind={kind} />
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
