import React, { Component } from 'react';

import { PageHeading } from 'Styles';

import Cookies from 'universal-cookie';
import { DashboardWrap } from './Styles';

const cookies = new Cookies();

export default class Dashboard extends Component {
  render() {
    const token = cookies.get('jwt');
    console.log(token);

    return (
      <DashboardWrap>
        <PageHeading>Dashboard</PageHeading>
      </DashboardWrap>
    );
  }
}
