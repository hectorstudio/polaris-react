import axios from 'axios'

// const AuthOld = {
//     isAuthenticated: false,
//     authenticate(cb) {
//         this.isAuthenticated = true
//         setTimeout(cb, 100) // fake async
//     },
//     signout(cb) {
//         this.isAuthenticated = false
//         setTimeout(cb, 100) // fake async
//     }
// }

const LOGIN_REQUEST = (username, password) => {
    let url = `http://atalanta.bysh.me:8080/m/v1/auth?login=${username}&password=${password}`;

    let data = {
        username: username,
        password: password
    }
    
    return axios.get(url)
}

const Auth = (username, password) => {
    LOGIN_REQUEST(username, password).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}

export default Auth