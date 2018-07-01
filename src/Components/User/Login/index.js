import React from 'react'

import { FormWrap } from './Styles'

import Logo from 'Components/Logo'
import Title from './Title'
import Input from './Input' 
import Button from './Button' 
import Register from './Register' 
import ForgotPassword from './ForgotPassword'

const LoginForm = (props) => (
    <React.Fragment>
        <FormWrap error={props.error}>
            <Logo alt="Bytesized Streaming" height="30"/>
            <Title heading="Welcome Back!" sub="Login to get started" />

            <Input type="text" name="username" placeholder="Enter Username" handleChange={props.handleChange} />
            <Input type="password" name="password" placeholder="Enter Password" handleChange={props.handleChange} />
            <Button handleLogin={props.handleLogin} value="Login" disabled={props.disabled}/>

            <Register to="/register" value="Sign Up" setup={false}/> 
        </FormWrap>

        <ForgotPassword to='/forgot' value="Forgot Password?"/>
    </React.Fragment>
)

export default LoginForm