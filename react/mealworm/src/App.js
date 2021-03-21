// import styles from './App.module.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Routes from './containers/Routes'

import { BrowserRouter as Router } from "react-router-dom";
import { getRecipes, cleanRecipes } from './services/recipes.js';
import { useState, useEffect } from 'react';



const App = () => {
  const pages = ['/', '/login', '/dashboard'];//, '/favourites'];
  const pageNames = ['Home', 'Login', 'Dashboard'];//, 'Favourites']

  const [recipeSearch, setRecipeSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);

  const updateRecipes = async () => {
    const newRecipes = await getRecipes('');
    const cleanedRecipes = cleanRecipes(newRecipes);
    setRecipes(cleanedRecipes);  
    setDisplayedRecipes(cleanedRecipes);
  }

  const updateDisplayedRecipes = () => {
    setDisplayedRecipes(recipes.filter(r => {
      return r.strMeal.toLowerCase().includes(recipeSearch.toLowerCase());
    }));
  }

  const toggleFav = (recipe) => {
    const copy = [...recipes];
    const index = copy.findIndex(r => r.idMeal === recipe.idMeal);

    if (index === -1) {
      console.log(`Recipe with idMeal: ${recipe.idMeal} does not exist`);
      return;
    }

    copy[index].isFav = !copy[index].isFav;
    setRecipes(copy);
    updateDisplayedRecipes();
  }

  useEffect(() => {
    updateRecipes();
  }, []);

  useEffect(() => {
    updateDisplayedRecipes();
  }, [recipeSearch]);

  return (
    <>
      <Router>
        <NavBar pages={pages} pageNames={pageNames} setSearch={setRecipeSearch}/>
        <Routes recipes={displayedRecipes} toggleFav={toggleFav} />
      </Router>
    </>
  );
}

export default App;
