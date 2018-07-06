import React, { Component } from 'react'

import Back from './Back'
import Logout from './Logout'
import Logo from 'Components/Logo'

import {
    HeaderWrap,
    HomeLink
} from './Styles'

export default class Header extends Component {
    render() { 
        return ( 
            <HeaderWrap>
                <Back prevLocation={this.props.prevLocation} />

                <HomeLink to="/dashboard">
                    <Logo alt="Bytesized Streaming" height="100%" />
                </HomeLink>

                <Logout />
            </HeaderWrap>
        )
    }
}