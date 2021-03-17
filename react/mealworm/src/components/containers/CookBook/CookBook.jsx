import FeedbackPanel from '../../FeedbackPanel/FeedbackPanel.jsx';
import recipes from './../../../data/recipes.js';
import CardList from './../../CardList';
import { useState } from 'react' ;

const CookBook = () => {
    const [favRecipes, setFaveRecipes] = useState(recipes.filter(recipe => recipe.isFav));

    const removeFromFavs = (recipe) => {

        recipe.isFav = false;
        setFaveRecipes(recipes.filter(recipe => recipe.isFav));
    }

    const display = () => favRecipes.length
        ? <CardList recipes={favRecipes} toggleFav={removeFromFavs} />
        : <FeedbackPanel title={'No Recipes'} description={'You have no favourite recipes'} />
 
    return (
        <>
            {display()}
        </>
    )
};

export default CookBook;