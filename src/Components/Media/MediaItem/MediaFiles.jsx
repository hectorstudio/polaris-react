import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons';

import {
  SelectStyle,
  MediaInfo,
  DropdownIcon,
  FileName,
  MediaInfoSubhead,
} from './Styles';

// eslint-disable-next-line
const DropdownIndicator = (props) => {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <DropdownIcon icon={faAngleDown} />
    </components.DropdownIndicator>
  );
};

const MediaFiles = ({ files, selectedFile, fileChange }) => (
  <MediaInfo>
    <MediaInfoSubhead>{(files.length > 1 ? 'Select File:' : 'File Name:')}</MediaInfoSubhead>
    { files.length > 1
      ? (
        <Select
          value={selectedFile}
          options={files}
          onChange={fileChange}
          components={{ DropdownIndicator }}
          styles={SelectStyle}
          isSearchable={false}
        />
      )
      : (
        <FileName>{selectedFile.label}</FileName>
      )
    }
  </MediaInfo>
);

MediaFiles.propTypes = {
  selectedFile: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
  files: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  fileChange: PropTypes.func.isRequired,
};

export default MediaFiles;
