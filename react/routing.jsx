// npm install react-router-dom --save
// gives a library so we can pass url 

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// this should be in it own component file
const NavBar = ({ paths = [] }) => {
    return(
        <>
            {paths.map(path => <Link key={path} to={path}>{path}</Link>)}
        </>
    )
};

const Home = () => {
    return (<div><p>this is my home page</p></div>)
}

const Information = () => {
    return (<div><p>this is my information page</p></div>)
}

const notFound = () => {
    return (<div><h1>There is nothing here... Go Away, please</h1></div>)
}

const App = () => {
    return (
        <>
        <Router>
            <p>This is on both Pages</p>
            <Navbar paths={"/", "information", "/routedontexist"}/>
            {/* {the navbar is on the router and not the switch so it will be on all the pages} */}
            <Switch>
                {/* {everything will only render if you are on that page} */}
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/information">
                    <Information />
                </Route>
                <Route path="*">
                    <notFound />
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default App;