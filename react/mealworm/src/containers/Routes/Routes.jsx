import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NotFound from '../../components/NotFound';
import Dashboard from '../Dashboard';
import CookBook from '../CookBook';
import Home from '../Home';
// import Favourites from './../Favourites';
import Login from  '../Login';

const Routes = ({ recipes, toggleFav }) => {
    return (
        <Switch>
            {/* <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route> */}
            {/* <Route exact path="/favourites">
                <CookBook recipes={recipes} toggleFav={toggleFav}/>
            </Route> */}
            <Route exact path="/dashboard">
                <Dashboard recipes={recipes} toggleFav={toggleFav}/>
            </Route>
            <Route exact path="/cookbook">
                <CookBook recipes={recipes} toggleFav={toggleFav}/>
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes;