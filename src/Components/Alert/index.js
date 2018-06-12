import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle'
import faCheckCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle'
import faQuestionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle'

import { Alert } from './Style'

const getIcon = type => {
    switch (type) {
        case 'error':
            return <FontAwesomeIcon icon={faExclamationCircle} />
        case 'info':
            return <FontAwesomeIcon icon={faQuestionCircle} />
        case 'success':
            return <FontAwesomeIcon icon={faCheckCircle} />
        default:
            return false
    }
}

const AlertTemplate = ({ message, options, style, close }) => (
    <Alert style={style}>
        {message}
        {getIcon(options.type)}
        <button onClick={close}>X</button>
    </Alert>
)

export default AlertTemplate