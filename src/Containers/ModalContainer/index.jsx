import React from 'react';
import { connect } from 'react-redux';

import AddLibraryModal from 'Components/Modal/AddLibraryModal';
import ResumeMediaModal from 'Components/Modal/ResumeMediaModal';
import WarningModal from 'Components/Modal/WarningModal';

import {
  LIBRARY_MODAL,
  RESUME_MODAL,
  WARNING_MODAL,
} from 'Redux/Constants/modalTypes';

const MODAL_COMPONENTS = {
  [LIBRARY_MODAL]: AddLibraryModal,
  [RESUME_MODAL]: ResumeMediaModal,
  [WARNING_MODAL]: WarningModal,
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
