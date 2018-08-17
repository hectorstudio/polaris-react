import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faCheckCircle, faQuestionCircle } from '@fortawesome/pro-regular-svg-icons'

import { AlertWrap, AlertMessage, AlertType, IconWrap, Close } from './Style'

const getIcon = type => {
    switch (type) {
        case 'error':
            return <FontAwesomeIcon icon={faExclamationCircle} color="#E83C50" size="2x"/>
        case 'info':
            return <FontAwesomeIcon icon={faQuestionCircle} color="#4C6EAC" size="2x"/>
        case 'success':
            return <FontAwesomeIcon icon={faCheckCircle} color="#81A35A" size="2x"/>
        default:
            return false
    }
}

const AlertTemplate = ({ message, options, style, close }) => {
    return (
        <AlertWrap>
            <AlertMessage> 
                <AlertType type={options.type}>{options.type}</AlertType> {message}
            </AlertMessage>

            <IconWrap>{getIcon(options.type)}</IconWrap>
            <Close onClick={close}>×</Close>
        </AlertWrap>
    )
}

const AlertOptions = {
    position: 'bottom right',
    timeout: 5000,
    transition: 'fade',
    offset: '30'
}

export {
    AlertTemplate,
    AlertOptions
} 