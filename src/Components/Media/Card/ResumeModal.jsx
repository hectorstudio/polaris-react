import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Modal from 'Components/Modal';

import { ModalBody, ModalHeader, ModalHeading } from 'Components/Modal/Styles';
import { ResumeOption } from './Styles';

const ResumeModal = (props) => {
  const {
    contentLabel,
    onClose,
    isOpen,
    internalRequest,
    url,
    history,
    playState,
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

  const convertPlaystate = () => {
    const date = new Date(null);
    date.setHours(0, 0, 0);
    date.setSeconds(playState.playtime);

    const hours = (date.getHours() > 0 ? `${date.getHours()} Hrs` : '');
    const minutes = (date.getMinutes() > 0 ? `${date.getMinutes()} Mins` : '');
    const seconds = (date.getSeconds() > 0 ? `${date.getSeconds()} Secs` : '');

    const resumeTimeStamp = `${hours} ${minutes} ${seconds}`;

    return `Resume video from ${resumeTimeStamp}`;
  };

  return (
    <Modal
      contentLabel={contentLabel}
      isOpen={isOpen}
      onClose={() => (onClose(isOpen))}
    >
      <ModalHeader>
        <ModalHeading>
          Resume Playback
        </ModalHeading>
      </ModalHeader>
      <ModalBody>
        <ResumeOption type="submit" href="#" onClick={() => (handlePlayRequest(true, true))}>
          {playState && convertPlaystate()}
        </ResumeOption>
        <ResumeOption type="submit" onClick={() => (handlePlayRequest(false, true))}>From Start</ResumeOption>
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
  playState: PropTypes.shape({
    finished: PropTypes.bool,
    playtime: PropTypes.number,
  }),
};

ResumeModal.defaultProps = {
  internalRequest: null,
  history: null,
  url: '',
  playState: {
    finished: false,
    playtime: 0,
  },
};

export default ResumeModal;
