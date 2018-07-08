import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logout from './Logout'

import {
    SidebarWrap
} from './Styles'

export default class Sidebar extends Component {
    render() { 
        return ( 
            <SidebarWrap>
                <ul>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/series">TV Series</Link>
                    </li>
                </ul>
                <Logout />
            </SidebarWrap>
        )
    }
}