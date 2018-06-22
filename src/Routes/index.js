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

// Libraries
import Movies from 'Pages/Libraries/Movies'
import MovieFull from 'Pages/Libraries/Movies/MovieFull'

import Series from 'Pages/Libraries/Series'

// Auth
import { Auth, checkAuth } from 'Actions/Auth'

export default class Routes extends Component {
    componentWillMount() {
        checkAuth();
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

                <PrivateRoute exact path="/dashboard" component={Dashboard} />

                <PrivateRoute exact path="/movies" component={Movies} />
                <PrivateRoute exact path='/movies/:uuid/:name' component={MovieFull} />

                <PrivateRoute exact path="/series" component={Series} />
            </Switch>
        )
    }
}