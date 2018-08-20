import React, { Component } from 'react';

import Back from './Back';
import Logout from './Logout';
import Search from './Search';

import { HeaderWrap } from './Styles';

export default class Header extends Component {
    state = {
      value: '',
    }

    _updateSearch = (value) => {
      this.setState({
        value,
      });
    };

    render() {
      return (
        <HeaderWrap>
          <Back />
          <Search value={this.state.value} updateSearch={this._updateSearch} />
          <Logout />
        </HeaderWrap>
      );
    }
}
