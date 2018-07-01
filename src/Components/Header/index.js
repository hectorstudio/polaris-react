import React, { Component } from 'react'

import GoBack from './GoBack'
import Logo from 'Components/Logo'

import {
    HeaderWrap,
    HomeLink
} from './Styles'

export default class Header extends Component {
    render() { 
        return ( 
            <HeaderWrap>
                <GoBack prevLocation={this.props.prevLocation} />

                <HomeLink to="/dashboard">
                    <Logo alt="Bytesized Streaming" height="100%" />
                </HomeLink>

            </HeaderWrap>
        )
    }
}