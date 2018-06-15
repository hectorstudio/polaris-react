import React from 'react'

import { RegisterLink, RegisterPara } from './Styles';

const Register = (props) => (
    <RegisterPara>
        Don't have an account?
        <RegisterLink to={props.to} title={props.value}>
            {props.value}
        </RegisterLink>
    </RegisterPara>
)

export default Register