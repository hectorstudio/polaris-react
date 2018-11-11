import React from 'react';
import { connect } from 'react-redux';

import LibraryModal from 'Components/Modal/LibraryModal';
import ResumeModal from 'Components/Modal/ResumeModal';

import { LIBRARY_MODAL, RESUME_MODAL } from 'Redux/Constants/modalTypes';

const MODAL_COMPONENTS = {
  [LIBRARY_MODAL]: LibraryModal,
  [RESUME_MODAL]: ResumeModal,
};

const ModalContainer = ({ type, props }) => {
  if (!type) {
    return null;
  }

  const Modal = MODAL_COMPONENTS[type];

  return <Modal {...props} />;
};

const mapStateToProps = state => ({
  type: state.modal.type,
  props: state.modal.props,
});

export default connect(mapStateToProps)(ModalContainer);
