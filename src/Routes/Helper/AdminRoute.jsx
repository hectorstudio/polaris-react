import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Auth } from 'Client/Auth';

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (Auth.isAuthenticated && Auth.isAdmin ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location },
        }}
      />
    ))
        }
  />
);

export default AdminRoute;
