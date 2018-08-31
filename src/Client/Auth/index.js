import axios from 'axios';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';

import { getBaseUrl } from 'Helpers';

const cookies = new Cookies();
const Token = cookies.get('jwt');

const propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export const Auth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true;
  },
  admin() {
    this.admin = jwtDecode(Token.jwt).admin;
  },
  logout() {
    this.isAuthenticated = false;
  },
};

export const checkAuth = () => {
  if (cookies.get('jwt') == null) return false;
  const jwt = jwtDecode(cookies.get('jwt').jwt);

  const currentTime = Date.now() / 1000;

  if (jwt.exp < currentTime) {
    return false;
  }

  return Auth.authenticate();
};

export const AUTH_REQUEST = (username, password) => {
  const url = `${getBaseUrl()}/m/v1/auth`;

  const data = {
    username,
    password,
  };

  return axios.post(url, data).then((response) => {
    cookies.set('jwt', response.data, { path: '/' });
    Auth.authenticate();
  });
};

AUTH_REQUEST.propTypes = propTypes;
