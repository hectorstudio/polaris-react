import React, { Component } from 'react';

import LogoIcon from 'Components/Logo/LogoIcon';
import Logout from './Logout';
import Search from './Search';

import { HeaderWrap, DashboardHeader } from './Styles';

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
          <DashboardHeader>
            <LogoIcon height="30" />
          </DashboardHeader>
          <Search value={value} updateSearch={this.updateSearch} />
          <Logout />
        </HeaderWrap>
      );
    }
}
