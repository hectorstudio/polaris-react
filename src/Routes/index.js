import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import PrivateRoute from './Helper/PrivateRoute'

// Auth
import Login from 'Pages/Auth/Login'
import ForgotPassword from 'Pages/Auth/ForgotPassword'
import Register from 'Pages/Auth/Register'

// App
import Dashboard from 'Pages/Dashboard'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/forgot' component={ForgotPassword} />
        <Route exact path='/register' component={Register} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
)

export default Routes