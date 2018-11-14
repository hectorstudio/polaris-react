import React from 'react';
import PropTypes from 'prop-types';

import { Heading, SubHeading } from '../Styles';

const Title = ({ heading, sub }) => (
  <div>
    <Heading>{heading}</Heading>
    <SubHeading>{sub}</SubHeading>
  </div>
);

Title.propTypes = {
  heading: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

export default Title;
