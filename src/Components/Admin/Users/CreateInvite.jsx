import React from 'react';
import PropTypes from 'prop-types';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { GenerateInvite } from './Styles';

const CreateInvite = (props) => {
  const { generateInvite } = props;

  return <GenerateInvite icon={faPlus} onClick={() => (generateInvite())} />;
};

CreateInvite.propTypes = {
  generateInvite: PropTypes.func.isRequired,
};

export default CreateInvite;
