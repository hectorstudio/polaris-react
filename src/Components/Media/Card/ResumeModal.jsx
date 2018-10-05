import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Modal from 'Components/Modal';

import { ModalBody } from 'Components/Modal/Styles';

const ResumeModal = (props) => {
  const {
    contentLabel,
    onClose,
    isOpen,
    resumeMedia,
    url,
    history,
  } = props;

  const externalPlay = (resume, autoplay) => {
    history.push({
      pathname: url,
      state: { resume, autoplay },
    });
  };

  const handlePlayRequest = (resume, autoplay) => {
    if (resumeMedia) {
      resumeMedia(resume);
      onClose();
    } else {
      externalPlay(resume, autoplay);
    }
  };

  return (
    <Modal
      contentLabel={contentLabel}
      isOpen={isOpen}
      onClose={() => (onClose(isOpen))}
      noCloseLabel
    >
      <ModalBody>
        <button type="submit" href="#" onClick={() => (handlePlayRequest(true, true))}>Resume Video</button>
        <button type="submit" onClick={() => (handlePlayRequest(false, true))}>From Start</button>
      </ModalBody>
    </Modal>
  );
};

ResumeModal.propTypes = {
  contentLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  url: PropTypes.string,
  resumeMedia: PropTypes.func,
  history: ReactRouterPropTypes.history,
};

ResumeModal.defaultProps = {
  resumeMedia: null,
  history: null,
  url: '',
};

export default ResumeModal;
