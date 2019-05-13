import React, { Component } from 'react';
import { compose } from 'lodash/fp';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';

import { FetchLibraryList, FETCH_LIBRARIES } from 'Queries/fetchLibraries';
import { ADD_LIBRARY } from 'Mutations/manageLibraries';

import { hideModal } from 'Redux/Actions/modalActions';

import { AlertInline } from 'Components/Alerts';

import {
  Modal,
  ModalWrap,
  ModalHeader,
  ModalHeading,
  ModalBody,
} from 'Components/Modal/Styles';
import ModalClose from '../ModalClose';
import AddLibraryAction from './AddLibraryAction';

class AddLibraryModal extends Component {
  constructor(props) {
    super(props);
    this.timeout = null;

    this.state = {
      error: false,
      errorMessage: '',
      kind: 0,
      isMounted: false,
    };
  }

  componentWillMount() {
    this.setState({ isMounted: true });
  }

  componentDidMount() {
    const { type } = this.props;

    this.setState({
      kind: (type === 'movies' ? 0 : 1),
    });
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
    clearTimeout(this.timeout);
  }

  closeModal = () => {
    const { hideModal } = this.props;

    hideModal();
  };

  modalClick = (e) => {
    if (e.target.id === 'modal-container') this.closeModal();
  }

  clearError = () => {
    const { isMounted } = this.state;

    this.timeout = setTimeout(() => {
      if (isMounted) {
        this.setState({
          error: false,
          errorMessage: '',
        });
      }
      this.timeout = null;
    }, 2000);
  }

  addLibrary = async (filePath) => {
    const { type, mutate, alert } = this.props;
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
        const { error } = res.data.createLibrary;

        if (error) {
          this.setState({
            error: true,
            errorMessage: error.message,
          }, async () => {
            this.clearError();
          });
        } else {
          alert.success('Library Added');
        }
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMessage: error.message,
        }, async () => {
          this.clearError();
        });
      });
  }

  render() {
    const { title } = this.props;
    const { error, errorMessage, kind } = this.state;

    return (
      <Modal id="modal-container" onClick={e => this.modalClick(e)}>
        <ModalWrap>
          <ModalHeader>
            <ModalHeading>
              {title}
              <ModalClose onClick={() => this.closeModal()} />
            </ModalHeading>
          </ModalHeader>
          <ModalBody>
            {error && <AlertInline type="error">{errorMessage}</AlertInline>}
            <FetchLibraryList kind={kind} />
            <AddLibraryAction addLibrary={this.addLibrary} />
          </ModalBody>
        </ModalWrap>
      </Modal>
    );
  }
}

AddLibraryModal.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
});

export default compose(
  connect(null, mapDispatchToProps),
  graphql(ADD_LIBRARY),
  withAlert,
)(AddLibraryModal);
