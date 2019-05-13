import React from 'react';
import PropTypes from 'prop-types';
import { withAlert } from 'react-alert';

import { copyToClipboard } from 'Helpers';

import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { UserListItem, CopyInvite } from './Styles';

const InviteItem = ({ code, alert }) => {
  const handleClick = () => {
    copyToClipboard(code);
    alert.success('Copied invite to clipboard');
  };

  return (
    <UserListItem>
      {code}
      <CopyInvite icon={faCopy} onClick={() => (handleClick())} />
    </UserListItem>
  );
};

InviteItem.propTypes = {
  code: PropTypes.string.isRequired,
  alert: PropTypes.shape({
    show: PropTypes.func.isRequired,
  }).isRequired,
};

export default withAlert(InviteItem);
