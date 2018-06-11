import React, { Component } from 'react';

import Logout from 'Pages/Auth/Logout'

export default class Dashboard extends Component {
    render() { 
        return ( 
            <div>
                <h1>Dashboard</h1>
                <Logout />
            </div>
         )
    }
}

