import axios from 'axios'

export const AUTH_REQUEST = (username, password) => {
    let url = `http://atalanta.bysh.me:8080/m/v1/auth?login=${username}&password=${password}`;

    return axios.get(url).then(response => {
        Auth.authenticate();
    })
}

export const Auth = {
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true
    },
    logout() {
        this.isAuthenticated = false
    }
}   