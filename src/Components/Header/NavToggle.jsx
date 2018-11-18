import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { hideNavigation, showNavigation } from 'Redux/Actions/navigationActions';

import { NavButton, NavIcon } from './Styles';

class NavToggle extends Component {
  toggleNav = () => {
    const { showNavigation, hideNavigation, navHidden } = this.props;
    
    if (navHidden) {
      showNavigation();
    } else {
      hideNavigation();
    }
  }

  render() {
    const { navHidden } = this.props;

    return (
      <NavButton onClick={this.toggleNav} alignLeft>
        <NavIcon icon={(navHidden ? faBars : faTimes)} />
      </NavButton>
    );
  }
}

const mapStateToProps = (state) => {
  const { navigation } = state;
  return { navHidden: navigation.hidden };
};

const mapDispatchToProps = dispatch => ({
  hideNavigation: () => dispatch(hideNavigation()),
  showNavigation: () => dispatch(showNavigation()),
});

NavToggle.propTypes = {
  navHidden: PropTypes.bool.isRequired,
  showNavigation: PropTypes.func.isRequired,
  hideNavigation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavToggle);
