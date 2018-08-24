import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withLastLocation } from 'react-router-last-location';
import { faAngleLeft } from '@fortawesome/pro-regular-svg-icons';

import { BackButton, BackIcon } from './Styles';

const Back = ({ lastLocation, history }) => {
  const visible = (!(lastLocation == null || lastLocation.pathname === '/' || lastLocation.pathname === '/login'));

  const goBack = () => {
    history.goBack();
  };

  return (
    <BackButton onClick={goBack} visible={visible}>
      <BackIcon icon={faAngleLeft} />
    </BackButton>
  );
};

Back.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  lastLocation: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Back.defaultProps = {
  lastLocation: {},
};

export default withLastLocation(Back);
