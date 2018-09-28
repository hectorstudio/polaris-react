import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddLibraryModal from './AddLibraryModal';

// Local Styles
import { LibraryHeaderWrap, AddLibraryButton } from './Styles';

export default class LibraryHeader extends Component {
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
    const { button, type } = this.props;
    const { modalOpen } = this.state;

    return (
      <LibraryHeaderWrap>
        <AddLibraryButton type="submit" onClick={() => (this.toggleModal(modalOpen))}>{button}</AddLibraryButton>
        <AddLibraryModal
          contentLabel="Add Library"
          isOpen={modalOpen}
          onClose={() => (this.toggleModal(modalOpen))}
          type={type}
        />
      </LibraryHeaderWrap>
    );
  }
}


LibraryHeader.propTypes = {
  button: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
