import React from 'react'
import { withAlert } from 'react-alert'

import { RegisterWrap } from './Styles'

import RegisterForm from 'Components/User/Register'

const Register = () => (
    <RegisterWrap>
        <RegisterForm />
    </RegisterWrap>
)

export default withAlert(Register)