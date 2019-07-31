import React from 'react';
import { Switch, Router } from 'react-router-dom';
import history from './modules/history';
import AdminRoute from './routes/adminRoute';
import ParentRoute from './routes/parentRoute';
import Admin from './pages/admin';
import Parent from './pages/parent';

function App() {
  return (
    <div id="wrapper">
       <Router history={history}>
        <Switch>
            <AdminRoute
              isAuthenticated={true}
              admin={true}
              path="/admin"
              component={Admin}
            />
            <ParentRoute
              isAuthenticated={true}
              parent={true}
              path="/parents"
              component={Parent}
            />
            {/* <Route component={NotFound} /> */}
        </Switch>
       </Router>
    </div>
  );
}

export default App;
