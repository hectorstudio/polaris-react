import React from 'react'

import { Links, FormLinkPara } from '../Styles';

const FormLink = (props) => (
    <FormLinkPara>
        {props.strapline}
        <Links to={props.to} title={props.value}>
            {props.value}
        </Links>
    </FormLinkPara>
)

export default FormLink