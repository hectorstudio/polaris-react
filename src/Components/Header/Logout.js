import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import { withRouter } from "react-router-dom";

import faSignOut from '@fortawesome/fontawesome-pro-regular/faSignOut'

import { LogoutButton, LogoutIcon } from './Styles'
import { Auth } from 'Components/Auth'

class Logout extends Component {
    _handleLogout = () => {
        const cookies = new Cookies();
        cookies.remove('jwt', { path: '/' });

        Auth.logout();
        this.props.history.push("/app/login");
    }

    render() {
        return (
            <LogoutButton onClick={this._handleLogout}>
                <LogoutIcon icon={faSignOut} />
            </LogoutButton>
        )
    }
}

export default withRouter(Logout);