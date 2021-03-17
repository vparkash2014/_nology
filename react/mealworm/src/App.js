// import styles from './App.module.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Routes from './components/containers/Routes'

import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';


const App = () => {
  const [recipeSearch, setRecipeSearch]= useState('');
  const pages = ['/', '/login', '/dashboard'];//, '/favourites'];
  const pageNames = ['Home', 'Login', 'Dashboard'];//, 'Favourites']
  return (
    <>
      <Router>
        <NavBar pages={pages} pageNames={pageNames} setSearch={setRecipeSearch}/>
        <Routes searchStr={recipeSearch}/>
      </Router>
    </>
  );
}

export default App;
