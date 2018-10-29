import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = styled(FontAwesomeIcon)`
    color:${props => props.theme.primary};
    font-size:1.8rem;
    position:${(props => props.relative ? 'relative' : 'absolute')};
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
`;

const Loading = ({ relative }) => (
  <LoadingSpinner icon={faSpinner} spin relative={relative ? 1 : 0} />
);

Loading.propTypes = {
  relative: PropTypes.bool,
};

Loading.defaultProps = {
  relative: false,
};

export default Loading;
