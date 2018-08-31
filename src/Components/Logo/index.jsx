import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'Images/logo-icon.svg';

const LogoIcon = ({ alt, height }) => (
  <img src={Icon} alt={alt} height={`${height}px`} />
);

LogoIcon.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
};

LogoIcon.defaultProps = {
  alt: 'Olaris',
  height: '150',
};

export default LogoIcon;
