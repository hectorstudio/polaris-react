import React from 'react';

import { Heading, SubHeading } from '../Styles';

const Title = ({ heading, sub }) => (
  <React.Fragment>
    <Heading>{heading}</Heading>
    <SubHeading>{sub}</SubHeading>
  </React.Fragment>
);

export default Title;
