import React from 'react';
import PropTypes from 'prop-types';

import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { MediaActionsDropdown } from '../Styles';

import RefreshMetadata from './RefreshMetadata';

const MediaDropdown = ({ uuid }) => (
  <MediaActionsDropdown icon={faEllipsisH}>
    <RefreshMetadata uuid={uuid} />
  </MediaActionsDropdown>
);

MediaDropdown.propTypes = {
  uuid: PropTypes.string.isRequired,
};

export default MediaDropdown;
