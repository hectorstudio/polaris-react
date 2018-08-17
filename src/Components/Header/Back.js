import React from 'react'
import { withLastLocation } from 'react-router-last-location'
import { faAngleLeft } from '@fortawesome/pro-regular-svg-icons'

import { BackButton, BackIcon } from './Styles'

const Back = ({ lastLocation, history  }) => {
    let visible = ( lastLocation == null || lastLocation.pathname === "/" || lastLocation.pathname === "/login" ? false : true);

    const goBack = () => {
        history.goBack();
    }

    return (
        <BackButton onClick={goBack} visible={visible}>
            <BackIcon icon={faAngleLeft} />
        </BackButton>
    )
}

export default withLastLocation(Back);