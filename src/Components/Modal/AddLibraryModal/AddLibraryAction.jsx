import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { AddLibraryWrap, AddLibraryInput, SubmitLibrary } from './Styles';

export default class AddLibraryAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filePath: '',
      disabled: true,
    };
  }

  handleChange = (e) => {
    const valid = e.target.value.length > 0;

    this.setState({
      filePath: (valid ? e.target.value : ''),
      disabled: !valid,
    });
  }

  render() {
    const { filePath, disabled } = this.state;
    const { addLibrary } = this.props;

    return (
      <AddLibraryWrap>
        <AddLibraryInput autoFocus placeholder="Enter Filepath" type="text" onChange={e => this.handleChange(e)} />
        <SubmitLibrary disabled={disabled} icon={faPlus} onClick={() => addLibrary(filePath)} />
      </AddLibraryWrap>
    );
  }
}

AddLibraryAction.propTypes = {
  addLibrary: PropTypes.func.isRequired,
};
