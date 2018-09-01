import React, { Component } from 'react';

import LogoIcon from 'Components/Logo/LogoIcon';
import Logout from './Logout';
import Search from './Search';

import { HeaderWrap, DashboardLink } from './Styles';

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
          <DashboardLink to="/">
            <LogoIcon height="30" />
          </DashboardLink>
          <Search value={value} updateSearch={this.updateSearch} />
          <Logout />
        </HeaderWrap>
      );
    }
}
