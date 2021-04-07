import CardList from '../../components/CardList';
import FeedbackPanel from '../../components/FeedbackPanel';

import { useState, useEffect } from 'react';
import { getRecipes } from '../../services/recipes.js';

const Cookbook = ({ recipes, toggleFav }) => {
    const [favRecipes, setFavRecipes] = useState(recipes.filter(recipe => recipe.isFav));
    const [recipes, setRecipes] = useState([]);

    // const getAndSetRecipes = async()
    useEffect(() => {
        setFavRecipes(recipes.filter(recipe => recipe.isFav));
    }, [recipes])

    return favRecipes.length 
        ? <CardList recipes={favRecipes} toggleFav={toggleFav} />
        : <FeedbackPanel title={'No Recipes'} description={'You have no favourite recipes'} />
}

export default Cookbook;