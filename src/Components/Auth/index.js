import axios from 'axios'
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode'

import { getBaseUrl } from 'Helpers'

const cookies = new Cookies();

export const AUTH_REQUEST = (username, password) => {
    let url = `${getBaseUrl()}/m/v1/auth`;

    let data = {
        login: username,
        password: password
    }

    return axios.post(url, data).then(response => {
        cookies.set('jwt', response.data, { path: '/' });
        Auth.authenticate();
    })
}

export const isAdmin = () => {
    let token = cookies.get('jwt');

    return jwtDecode(token.jwt).admin
}

export const Auth = {
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true
    },
    admin() {
        this.admin = true
    },
    logout() {
        this.isAuthenticated = false
    }
}   

export const checkAuth = () => {
    if (cookies.get('jwt') == null) return false

    let token = cookies.get('jwt'),
        jwt = jwtDecode(token.jwt),
        current_time = Date.now() / 1000;

    if (jwt.exp < current_time) {
        return false
    }

    Auth.authenticate();
}