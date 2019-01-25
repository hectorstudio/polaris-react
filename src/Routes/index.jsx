import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loading from 'Components/Loading';

// Auth
import Login from 'Containers/User/Login';
import Register from 'Containers/User/Register';

// App
import Dashboard from 'Containers/Dashboard';

// Admin
import Users from 'Containers/Admin/Users';

// Movie
import MovieList from 'Containers/Media/MovieList';
import Movie from 'Containers/Media/Movie';

// Series
import SeriesList from 'Containers/Media/SeriesList';
import Series from 'Containers/Media/Series';
import Season from 'Containers/Media/Season';
import Episode from 'Containers/Media/Episode';

// Search Results
import Search from 'Containers/Media/Search';

// Auth
import { Auth, checkAuth } from 'Client/Auth';
import { isInitialSetup } from 'Helpers';
import AdminRoute from './Helper/AdminRoute';
import PrivateRoute from './Helper/PrivateRoute';

class Routes extends Component {
  state = {
    initialSetup: false,
    loading: true,
  };

  componentWillMount() {
    checkAuth();
    isInitialSetup()
      .then((res) => {
        this.setState({
          loading: false,
          initialSetup: res.data
        });
      });
  }

  initialRender = () => {
    const { initialSetup } = this.state;

    if (Auth.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    if (initialSetup) {
      return <Redirect to="/register" />;
    }

    return <Redirect to="/login" />;
  };

  render() {
    const { loading, initialSetup } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <Switch>
        <Route exact path="/" render={this.initialRender} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/register"
          render={routeProps => (
            <Register {...routeProps} initialSetup={initialSetup} />
          )}
        />

        <AdminRoute exact path="/users" component={Users} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />

        <PrivateRoute exact path="/movies" component={MovieList} />
        <PrivateRoute exact path="/movie/:uuid" component={Movie} />

        <PrivateRoute exact path="/series" component={SeriesList} />
        <PrivateRoute exact path="/series/:uuid" component={Series} />
        <PrivateRoute exact path="/season/:uuid" component={Season} />
        <PrivateRoute exact path="/episode/:uuid" component={Episode} />

        <PrivateRoute exact path="/search/:value" component={Search} />
      </Switch>
    );
  }
}

export default Routes;
