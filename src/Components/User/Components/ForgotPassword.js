import React from 'react'

import { ForgotPasswordLink } from '../Styles';

const ForgotPassword = (props) => (
    <ForgotPasswordLink to={props.to} value={props.value}>
        {props.value}
    </ForgotPasswordLink>
)

export default ForgotPassword