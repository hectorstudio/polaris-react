import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './Styles';

const renderSectionTitle = section => (
  <Title>{section.title}</Title>
);

renderSectionTitle.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
  }),
};

renderSectionTitle.defaultProps = {
  section: {
    title: 'Media',
  },
};

export default renderSectionTitle;
