import React, { Component } from 'react';

import Logout from 'Pages/Auth/Logout'
import { DashboardWrap } from './Styles';

export default class Dashboard extends Component {
    render() { 
        return ( 
            <DashboardWrap>
                <h1>Dashboard</h1>
                <Logout />
            </DashboardWrap>
         )
    }
}

