import React from 'react'
import { FormWrap } from '../Styles'

import Logo from 'Components/Logo'
import Title from '../Components/Title'
import Input from '../Components/Input' 
import Button from '../Components/Button' 
import FormLink from '../Components/FormLink' 
import ForgotPassword from '../Components/ForgotPassword'

const LoginForm = (props) => (
    <React.Fragment>
        <FormWrap error={props.error}>
            <Logo alt="Olaris" height="30"/>
            <Title heading="Welcome Back!" sub="Login to get started" />

            <Input type="text" name="username" autocomplete="username" placeholder="Enter Username" handleChange={props.handleChange} />
            <Input type="password" name="password" autocomplete="password" placeholder="Enter Password" handleChange={props.handleChange} />
            <Button handleSubmit={props.handleLogin} value="Login" disabled={props.disabled}/>

            <FormLink to="/register" strapline="Don't Have An Account?" value="Sign Up" setup={false}/> 
        </FormWrap>

        <ForgotPassword to='/forgot' value="Forgot Password?"/>
    </React.Fragment>
)

export default LoginForm