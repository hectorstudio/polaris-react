import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom' 
import PrivateRoute from './Helper/PrivateRoute'

// Auth
import Login from 'Pages/Auth/Login'
import ForgotPassword from 'Pages/Auth/ForgotPassword'
import Register from 'Pages/Auth/Register'
import Setup from 'Pages/Auth/Setup'

// App
import Dashboard from 'Pages/Dashboard'

// Auth
import { Auth, checkAuth } from 'Actions/Auth'

export default class Routes extends Component {
    componentWillMount() {
        checkAuth();
    }
    
    componentDidMount() {
        console.log(Auth.isAuthenticated);
    }

    render() { 
        return ( 
            <Switch>
                <Route exact path="/" render={() => (
                    Auth.isAuthenticated ? (
                        <Redirect to="/dashboard" />
                    ) : (
                            <Redirect to="/login" />
                        )
                )} />

                <Route exact path='/login' component={Login} />
                <Route exact path='/forgot' component={ForgotPassword} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/setup' component={Setup} />

                <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
        )
    }
}