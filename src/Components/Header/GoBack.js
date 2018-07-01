import React from 'react'

import { withLastLocation } from 'react-router-last-location';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleLeft from '@fortawesome/fontawesome-pro-regular/faAngleLeft'

import { BackButton } from './Styles'

const GoBack = ({ lastLocation, history  }) => {
    let visible = ( lastLocation == null || lastLocation.pathname === "" || lastLocation.pathname === "/login" ? false : true);
    
    const goBack = () => {
        history.goBack();
    }

    if (visible) {
        return (
            <BackButton onClick={goBack}>
                <FontAwesomeIcon icon={faAngleLeft} color="#93A4B6" size="2x" />
            </BackButton>
        )
    } else {
        return null
    }
}

export default withLastLocation(GoBack);