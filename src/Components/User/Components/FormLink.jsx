import React from 'react';
import PropTypes from 'prop-types';

import { Links, FormLinkPara } from '../Styles';

const FormLink = ({ strapline, to, value }) => (
  <FormLinkPara>
    {strapline}
    <Links to={to} title={value}>
      {value}
    </Links>
  </FormLinkPara>
);

FormLink.propTypes = {
  strapline: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormLink;
