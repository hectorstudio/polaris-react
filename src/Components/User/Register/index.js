import React from 'react'
import { FormWrap } from '../Styles'

import Logo from 'Components/Logo'
import Title from '../Components/Title'
import Input from '../Components/Input' 
import Button from '../Components/Button' 
import FormLink from '../Components/FormLink' 

const RegisterForm = (props) => (
    <React.Fragment>
        <FormWrap error={props.error}>
            <Logo alt="Bytesized Streaming" height="30" />
            <Title heading="Sign Up" sub="Account Registration" />
            {!props.initialSetup &&
                <Input type="text" value={(props.invite_code ? props.invite_code : '')} name="invite_code" autocomplete="invite_code" placeholder="Enter Invite Code" handleChange={props.handleChange} uniqueCode />
            }
            <Input type="text" name="username" autocomplete="new-username" placeholder="Enter Username" handleChange={props.handleChange} />
            <Input type="password" name="password" autocomplete="new-password" placeholder="Enter Password" handleChange={props.handleChange} />
            <Button handleSubmit={props.handleRegister} value="Register" />

            <FormLink to="/login" strapline="Have An Account?" value="Log In" setup={false} />
        </FormWrap>
    </React.Fragment>
)

export default RegisterForm