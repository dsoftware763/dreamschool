import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

const ParentRoute = ({ component: Component, isAuthenticated, parent, to, ...rest }) => (
  <Switch>
  <Route
    {...rest}
    
    render={props =>
      (parent) ? (
            <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: to,
            state: { redirect: props.location.pathname, isAuthenticated },
          }}
        />
      )
    }
  />
  </Switch>

);

ParentRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

ParentRoute.defaultProps = {
  to: '/',
};

export default ParentRoute;