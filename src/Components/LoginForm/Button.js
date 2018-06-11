import React from 'react'

import { LoginButton } from './Styles'

const Button = ({ handleLogin, value}) => (
    <LoginButton type="submit" onClick={handleLogin}>{value}</LoginButton>
)

export default Button