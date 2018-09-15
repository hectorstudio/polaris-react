import React from 'react';
import { components } from 'react-select';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons';

import { DropdownIcon } from './Styles';

// eslint-disable-next-line
const DropdownIndicator = (props) => {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <DropdownIcon icon={faAngleDown} />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
