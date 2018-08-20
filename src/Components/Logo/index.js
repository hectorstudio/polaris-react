import React from 'react';

import Icon from 'Images/logo-icon.png';

const LogoIcon = ({ alt, height }) => (
  <img src={Icon} alt={alt} height={`${height}px`} />
);

export default LogoIcon;
