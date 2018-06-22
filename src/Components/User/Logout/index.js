import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import { withRouter } from "react-router-dom";

import { Auth } from 'Components/Auth'

class Logout extends Component {
    _handleLogout = () => {
        const cookies = new Cookies();
        cookies.remove('jwt', { path: '/' });
    
        Auth.logout();
        this.props.history.push("/login");
    }

    render() {
        return ( 
            <button onClick={this._handleLogout}>Logout</button>
         )
    }
}

export default withRouter(Logout);