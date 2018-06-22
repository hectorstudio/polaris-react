import React from 'react'

import Icon from 'Images/logo-icon.png'

const LogoIcon = ({alt, width}) => (
    <img src={Icon} alt={alt} width={`${width}px`} />
);

export default LogoIcon