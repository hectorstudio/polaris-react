import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom' 
import PrivateRoute from './Helper/PrivateRoute'

// Auth
import Login from 'Containers/User/Login'
import ForgotPassword from 'Containers/User/ForgotPassword'
import Register from 'Containers/User/Register'

// App
import Dashboard from 'Containers/Dashboard'

// Libraries
import MovieList from 'Containers/Media/MovieList'
import Movie from 'Containers/Media/Movie'

import SeriesList from 'Containers/Media/SeriesList'

// Auth
import { Auth, checkAuth } from 'Components/Auth'

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

                <PrivateRoute exact path="/dashboard" component={Dashboard} />

                <PrivateRoute exact path="/movies" component={MovieList} />
                <PrivateRoute exact path='/movies/:uuid/:name' component={Movie} />

                <PrivateRoute exact path="/series" component={SeriesList} />
            </Switch>
        )
    }
}