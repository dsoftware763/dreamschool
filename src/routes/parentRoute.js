import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ParentRoute = ({ component: Component, isAuthenticated, parent, to, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated && parent) ? (
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