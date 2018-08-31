import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'Images/full-logo.svg';

const Logo = ({ alt, height }) => (
  <img src={Icon} alt={alt} height={`${height}px`} />
);

Logo.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
};

Logo.defaultProps = {
  alt: 'Olaris',
  height: '150',
};

export default Logo;
