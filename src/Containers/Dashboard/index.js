import React, { Component } from 'react'

import { DashboardWrap } from './Styles'
import { PageHeading } from 'Styles'

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Dashboard extends Component {
    render() { 

        let token = cookies.get('jwt');
        console.log(token);
        
        return ( 
            <DashboardWrap>
                <PageHeading>Dashboard</PageHeading>
            </DashboardWrap>
         )
    }
}

