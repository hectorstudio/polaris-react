import React from 'react';
import PropTypes from 'prop-types';

import { faEllipsisH } from '@fortawesome/pro-regular-svg-icons';
import { MediaActionsDropdown } from '../Styles';

import RefreshMetadata from './RefreshMetadata';

const MediaActions = ({ uuid }) => (
  <MediaActionsDropdown icon={faEllipsisH}>
    <RefreshMetadata uuid={uuid} />
    <span>Coming Soon</span>
  </MediaActionsDropdown>
);

MediaActions.propTypes = {
  uuid: PropTypes.string.isRequired,
};

export default MediaActions;
