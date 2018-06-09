import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import PrivateRoute from './PrivateRoute'

import Login from 'Pages/Login'
import Dashboard from 'Pages/Dashboard'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
)

export default Routes