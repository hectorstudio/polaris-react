import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { withLastLocation } from 'react-router-last-location';
import faAngleLeft from '@fortawesome/fontawesome-pro-regular/faAngleLeft'

const BackIcon = styled(FontAwesomeIcon)`
    color:#93A4B6;
    font-size:2rem;
    transition:.2s all;
`;

const BackButton = styled.button`
    width: 6rem;
    height:6rem;
    padding:1.5rem;
    background:none;
    border:0;
    opacity: ${(props => props.visible ? '1' : '.2')};
    pointer-events: ${(props => props.visible ? 'initial' : 'none')};

    &:hover ${BackIcon} {
        color: ${(props => props.visible ? props.theme.darken.primary : '#93A4B6')};
    }
`;

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