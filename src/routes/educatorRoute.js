import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

const EducatorRoute = ({ component: Component, educator, to, ...rest }) => (
  <Switch>
  <Route
    {...rest}
    
    render={props =>
      (educator) ? (
        
            <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: to,
            state: { redirect: props.location.pathname, educator },
          }}
        />
      )
    }
  />
  </Switch>

);

EducatorRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  educator: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

EducatorRoute.defaultProps = {
  to: '/',
};

export default EducatorRoute;