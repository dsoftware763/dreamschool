import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, isAuthenticated,  to, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <div id="wrapper">
        <Component {...props} />
        </div>
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

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

AuthRoute.defaultProps = {
  to: '/',
};

export default AuthRoute;