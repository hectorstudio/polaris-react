import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    background: '#141f2f',
    borderRadius: '2px',
  };

  return (
    <div style={{ ...style, ...thumbStyle }} {...props} />
  );
};

const renderTrack = ({ style, ...props }) => {
  const trackStyle = {
    width: '.8rem',
    right: '.5rem',
    top: '0',
    padding: '.5rem 0',
    height: '100%',
  };

  return (
    <div style={{ ...style, ...trackStyle }} {...props} />
  );
};

const Scroll = ({ children }) => (
  <Scrollbars
    autoHeight
    autoHide
    autoHeightMin="calc(100vh - 81px)"
    renderThumbVertical={renderThumb}
    renderTrackVertical={renderTrack}
  >
    {children}
  </Scrollbars>
);

Scroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Scroll;
