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

const LOGIN_REQUEST = (email, password) => {
    let url = 'http://atalanta.bysh.me:8080/m/v1/auth';

    let data = JSON.stringify({
        username: email,
        password: password
    })

    return axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
}

const Auth = props => {
    LOGIN_REQUEST(props.email, props.password).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}

export default Auth