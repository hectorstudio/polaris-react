import React from 'react';
import PropTypes from 'prop-types';

import { faTrash } from '@fortawesome/pro-regular-svg-icons';

import { LibraryItemWrap, LibraryItemFilePath, LibraryItemDelete } from './Styles';

const deleteLibrary = id => console.log(id);

const LibraryItem = ({ filePath, id }) => (
  <LibraryItemWrap>
    <LibraryItemFilePath>{filePath}</LibraryItemFilePath>
    <LibraryItemDelete icon={faTrash} onClick={() => deleteLibrary(id)} />
  </LibraryItemWrap>
);

LibraryItem.propTypes = {
  filePath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default LibraryItem;
