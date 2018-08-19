import React from 'react'
import PropTypes from 'prop-types'

import AlertIcon from './AlertIcon'

import { 
    AlertWrap, 
    AlertMessage,
    AlertType, 
    IconWrap, 
    Close 
} from './Style'

const AlertOptions = {
    position: 'bottom right',
    timeout: 5000,
    transition: 'fade',
    offset: '30'
}

const AlertTemplate = ({ 
    message, 
    options, 
    close 
}) => (
        <AlertWrap>
            <AlertMessage> 
                <AlertType type={options.type}>{options.type}</AlertType> {message}
            </AlertMessage>

            <IconWrap>{AlertIcon(options.type)}</IconWrap>
            <Close onClick={close}>×</Close>
        </AlertWrap>
    )


AlertTemplate.propTypes = {
    message: PropTypes.string.isRequired,
    options: PropTypes.shape({
        type: PropTypes.string.isRequired,
        timeout: PropTypes.number
    }).isRequired,
    close: PropTypes.func.isRequired
};

AlertTemplate.defaultProps = {
    options: PropTypes.shape({
        type: 'info',
        timeout: 5000
    })
};

export {
    AlertTemplate,
    AlertOptions
} 