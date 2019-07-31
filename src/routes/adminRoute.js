import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AdminLayout from '../components/admin/AdminLayout';

const AdminRoute = ({ component: Component, isAuthenticated, admin, to, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated && admin) ? (
          <AdminLayout {...props}>
            <Component {...props} />
          </AdminLayout>
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

AdminRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

AdminRoute.defaultProps = {
  to: '/',
};

export default AdminRoute;