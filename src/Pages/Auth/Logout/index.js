import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import { Auth } from 'Actions/Auth'

class Logout extends Component {
    _handleLogout = () => {
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