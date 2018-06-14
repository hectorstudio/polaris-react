import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faExclamationCircle from '@fortawesome/fontawesome-pro-regular/faExclamationCircle'
import faCheckCircle from '@fortawesome/fontawesome-pro-regular/faCheckCircle'
import faQuestionCircle from '@fortawesome/fontawesome-pro-regular/faQuestionCircle'

import { AlertWrap, AlertMessage, AlertType } from './Style'

const getIcon = type => {
    switch (type) {
        case 'error':
            return <FontAwesomeIcon icon={faExclamationCircle} color="#E83C50"/>
        case 'info':
            return <FontAwesomeIcon icon={faQuestionCircle} color="#4C6EAC"/>
        case 'success':
            return <FontAwesomeIcon icon={faCheckCircle} color="#81A35A"/>
        default:
            return false
    }
}

const AlertTemplate = ({ message, options, style, close }) => {
    return (
        <AlertWrap>
            <AlertMessage>
                <AlertType type={options.type}>{options.type}</AlertType>{message}
            </AlertMessage>

            {getIcon(options.type)}
            <button onClick={close}>X</button>
        </AlertWrap>
    )
}

export default AlertTemplate