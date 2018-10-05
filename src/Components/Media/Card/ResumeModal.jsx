import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'Components/Modal';

import { ModalBody } from 'Components/Modal/Styles';

const ResumeModal = (props) => {
  const { contentLabel, onClose, isOpen, history, url } = props;

  const fromStart = () => {
    history.push({
      pathname: url,
      state: { resume: false, autoplay: true },
    });
  };

  const resume = () => {
    history.push({
      pathname: url,
      state: { resume: true, autoplay: true },
    });
  };

  return (
    <Modal
      contentLabel={contentLabel}
      isOpen={isOpen}
      onClose={() => (onClose(isOpen))}
      noCloseLabel
    >
      <ModalBody>
        <button type="submit" href="#" onClick={() => (resume())}>Resume Video</button>
        <button type="submit" onClick={() => (fromStart())}>From Start</button>
      </ModalBody>
    </Modal>
  );
};

ResumeModal.propTypes = {
  contentLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ResumeModal;
