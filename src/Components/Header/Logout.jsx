import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Cookies from 'universal-cookie';
import { withRouter } from 'react-router-dom';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Auth } from 'Client/Auth';
import { NavButton, NavIcon } from './Styles';

class Logout extends Component {
  handleLogout = () => {
    const { history } = this.props;

    const cookies = new Cookies();
    cookies.remove('jwt', { path: '/' });

    Auth.logout();
    history.push('/login');
  }

  render() {
    return (
      <NavButton onClick={this.handleLogout}>
        <NavIcon icon={faSignOutAlt} />
      </NavButton>
    );
  }
}

Logout.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Logout);
