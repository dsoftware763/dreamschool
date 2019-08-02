import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from './modules/history';
import AdminRoute from './routes/adminRoute';
import AuthRoute from './routes/authRoute';
import Admin from './pages/admin';
import ParentLayout from './components/parents/ParentLayout';
import RoutePublic from './routes/routePublic';
import Home from './pages/front/home';
import About from './pages/front/about';
import Educator from './pages/front/educator';
import Search from './pages/front/search';

function App() {
  return (

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
            <RoutePublic
              isAuthenticated={false}
              path="/"
              exact
              component={Home}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/about"
              exact
              component={About}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/educator"
              exact
              component={Educator}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/search"
              exact
              component={Search}
            />

            {/* <Route component={NotFound} /> */}
        </Switch>
       </Router>
   
  );
}

export default App;
