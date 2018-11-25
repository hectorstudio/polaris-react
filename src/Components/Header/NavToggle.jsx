import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { hideNavigation, showNavigation } from 'Redux/Actions/navigationActions';

import { 
  NavButton,
  NavIcon,
  ContentOverlay,
  HideNavIcon,
} from './Styles';

class NavToggle extends Component {  
  responsiveTrigger() {
    const { hideNavigation, browser } = this.props;

    if (browser.lessThan.large) hideNavigation();
  }

  componentDidMount() {
    window.addEventListener("resize", this.responsiveTrigger.bind(this));
    this.responsiveTrigger();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.responsiveTrigger.bind(this));
  }

  toggleNav = () => {
    const { showNavigation, hideNavigation, navHidden } = this.props;
    
    if (navHidden) {
      showNavigation();
    } else {
      hideNavigation();
    }
  }

  render() {
    const { navHidden, browser } = this.props;
    
    return (
      <Fragment>
        { browser.lessThan.large && !navHidden && 
          <ContentOverlay onClick={this.toggleNav}>
            <HideNavIcon icon={faTimes} />
          </ContentOverlay> 
        }
        <NavButton onClick={this.toggleNav} alignLeft>
          <NavIcon icon={(navHidden ? faBars : faTimes)} />
        </NavButton>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { navigation, browser } = state;
  return { 
    navHidden: navigation.hidden,
    browser,
  };
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
