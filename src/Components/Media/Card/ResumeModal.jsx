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
    internalRequest,
    url,
    history,
  } = props;

  const handlePlayRequest = (resume, autoplay) => {
    if (internalRequest) {
      internalRequest(resume);
      onClose();
    } else {
      history.push({
        pathname: url,
        state: { resume, autoplay },
      });
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
  internalRequest: PropTypes.func,
  history: ReactRouterPropTypes.history,
};

ResumeModal.defaultProps = {
  internalRequest: null,
  history: null,
  url: '',
};

export default ResumeModal;
