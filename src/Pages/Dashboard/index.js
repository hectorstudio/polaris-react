import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logout from 'Pages/Auth/Logout'
import { DashboardWrap } from './Styles'

export default class Dashboard extends Component {
    render() { 
        return ( 
            <DashboardWrap>
                <h1>Dashboard</h1>
                <Logout />
                <ul>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </DashboardWrap>
         )
    }
}

