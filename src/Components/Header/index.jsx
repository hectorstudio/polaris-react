import React, { Component } from 'react';

import Back from './Back';
import Logout from './Logout';
import Search from './Search';

import { HeaderWrap } from './Styles';

export default class Header extends Component {
    state = {
      value: '',
    }

    updateSearch = (value) => {
      this.setState({
        value,
      });
    };

    render() {
      const { value } = this.state;

      return (
        <HeaderWrap>
          <Back />
          <Search value={value} updateSearch={this.updateSearch} />
          <Logout />
        </HeaderWrap>
      );
    }
}
