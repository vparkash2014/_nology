import './App.css'
import NavBarMenu from './components/NavBarMenu'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import PageNotFound from './components/PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



const App = () => {
  const pages = ["/", "/dashboard", "/profile", "/DoesNotExist"];
  const pageNames = ["Home", "Dashboard", "Profile", "DoesNotExist"]
  return (
    <>
    <Router>
      <NavBarMenu pages={pages} pageNames={pageNames}/>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard /> 
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
