import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from './modules/history';
import AdminRoute from './routes/adminRoute';
import AuthRoute from './routes/authRoute';
import Admin from './pages/admin';
import ParentLayout from './components/parents/ParentLayout';

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
            
            <AuthRoute
              isAuthenticated={true}
              path="/parents"
              component={ParentLayout}
            />
           
            {/* <Route component={NotFound} /> */}
        </Switch>
       </Router>
    </div>
  );
}

export default App;
