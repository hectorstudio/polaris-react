import React from 'react';
import PropTypes from 'prop-types';

import { Heading, SubHeading } from '../Styles';

const Title = ({ heading, sub }) => (
  <React.Fragment>
    <Heading>{heading}</Heading>
    <SubHeading>{sub}</SubHeading>
  </React.Fragment>
);

Title.propTypes = {
  heading: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

export default Title;
