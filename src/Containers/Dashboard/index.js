import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { DashboardWrap } from './Styles'

export default class Dashboard extends Component {
    render() { 
        return ( 
            <DashboardWrap>
                <h1>Dashboard</h1>
                <ul>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/series">TV Series</Link>
                    </li>
                </ul>
            </DashboardWrap>
         )
    }
}

