/* eslint-disable */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';

import { getBaseUrl } from 'Helpers';

const cookies = new Cookies();
const Token = cookies.get('jwt');

export const AuthContext = React.createContext('Authentication');

export class AuthProvider extends React.PureComponent {
  state = {
    user: null,
    isAuthenticated: false,
    authError: null,

    setUser: user => {
      this.setState({ user, authError: null, isAuthenticated: true })
    },

    setAuthError: authError => {
      this.setState({ authError, user: null, isAuthenticated: false })
    },

    logOut: () => {
      // do stuff
    },

    logIn: (username, password) => {

    }
  };

  async componentDidMount() {
    // do some network stuff or check cookie, or what ever
    const res = await doStuff();

    if (res.ok) {
      res.json().then(user => this.state.setUser(user))
    }
    else {
      res.json().then(error => this.state.setAuthError(error));
    }
  }
  
  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const withAuth = Component => props => (
  <AuthContext.Consumer>
    {state => <Component {...props} {...state} />}
  </AuthContext.Consumer>
);