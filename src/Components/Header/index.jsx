import React, { Component } from 'react';

import Logout from './Logout';
import NavToggle from './NavToggle';
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
          <NavToggle />
          <Search value={value} updateSearch={this.updateSearch} />
          <Logout />
        </HeaderWrap>
      );
    }
}
