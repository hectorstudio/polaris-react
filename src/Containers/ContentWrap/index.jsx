import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'Components/Scroll';

import Content from './Styles';

const ContentWrap = ({ children }) => (
  <Content>
    <Scroll>
      {children}
    </Scroll>
  </Content>
);

ContentWrap.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContentWrap;
