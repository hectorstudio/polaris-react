import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LogoIcon from 'Components/Logo/LogoIcon';
import Scroll from 'Components/Scroll';
import Navigation from './Navigation';

import { SidebarWrap, DashboardLink } from './Styles';

const Sidebar = (props) => {
  const { navHidden, videoOpen } = props;

  return (
    <SidebarWrap navHidden={navHidden} videoOpen={videoOpen}>
      <Scroll>
        <Fragment>
          <DashboardLink to="/">
            <LogoIcon height="30" />
          </DashboardLink>

          <Navigation />
        </Fragment>
      </Scroll>
    </SidebarWrap>
  );
};

const mapStateToProps = state => ({
  navHidden: state.navigation.hidden,
  videoOpen: state.video.playing,
});

Sidebar.propTypes = {
  navHidden: PropTypes.bool.isRequired,
  videoOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Sidebar);
