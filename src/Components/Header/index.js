import React from 'react'

import Back from './Back'
import Logout from './Logout'

import { HeaderWrap } from './Styles'

const Header = () => (
    <HeaderWrap>
        <Back />
        <Logout />
    </HeaderWrap>
)

export default Header