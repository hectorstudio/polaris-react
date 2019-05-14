import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Scroll from 'Components/Scroll';

import Content from './Styles';

const ContentWrap = ({ children, navHidden }) => (
  <Content navHidden={navHidden}>
    <Scroll navHidden={navHidden}>
      {children}
    </Scroll>
  </Content>
);

const mapStateToProps = (state) => {
  const { navigation } = state;
  return {
    navHidden: navigation.hidden,
  };
};

ContentWrap.propTypes = {
  navHidden: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default connect(mapStateToProps, null)(ContentWrap);
