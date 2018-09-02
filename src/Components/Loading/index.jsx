import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/pro-regular-svg-icons';

const LoadingSpinner = styled(FontAwesomeIcon)`
    color:${props => props.theme.primary};
    font-size:1.8rem;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
`;

const Loading = () => (<LoadingSpinner icon={faSpinnerThird} spin />);

export default Loading;
