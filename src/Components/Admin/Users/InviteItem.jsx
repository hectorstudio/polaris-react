import React from 'react';
import PropTypes from 'prop-types';

import { copyToClipboard } from 'Helpers';

import { faCopy } from '@fortawesome/pro-regular-svg-icons';
import { UserListItem, CopyInvite } from './Styles';

const InviteItem = ({ code }) => (
  <UserListItem>
    {code}
    <CopyInvite icon={faCopy} onClick={() => (copyToClipboard(code))} />
  </UserListItem>
);

InviteItem.propTypes = {
  code: PropTypes.string.isRequired,
};

export default InviteItem;
