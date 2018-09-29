import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AddLibraryWrap, AddLibraryInput, SubmitLibrary } from './Styles';

export default class AddLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filePath: '',
    };
  }

  handleChange = e => this.setState({ filePath: e.target.value });

  render() {
    const { filePath } = this.state;
    const { addLibrary } = this.props;

    console.log(filePath);

    return (
      <AddLibraryWrap>
        <AddLibraryInput type="text" onChange={e => this.handleChange(e)} />
        <SubmitLibrary type="submit" onClick={() => addLibrary(filePath)}>Add Library</SubmitLibrary>
      </AddLibraryWrap>
    );
  }
}

AddLibrary.propTypes = {
  addLibrary: PropTypes.func.isRequired,
};
