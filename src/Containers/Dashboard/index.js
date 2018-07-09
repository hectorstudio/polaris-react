import React, { Component } from 'react'

import { DashboardWrap } from './Styles'
import { PageHeading } from 'Helpers/Styles'

export default class Dashboard extends Component {
    render() { 
        return ( 
            <DashboardWrap>
                <PageHeading>Dashboard</PageHeading>
            </DashboardWrap>
         )
    }
}

