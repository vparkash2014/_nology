import CardList from '../../CardList';
import recipes from './../../../data/recipes.js';
import { useState, useEffect } from 'react';

const Dashboard = ({ searchStr }) => {
    const [stateRecipes, setStateRecipes] = useState(recipes);
    const [displayRecipes, setDisplayRecipes] = useState(stateRecipes.filter(recipe => {
        return recipe.strMeal.toLowerCase().includes(searchStr.toLowerCase());
    }));

    useEffect(()=>{
        setDisplayRecipes(stateRecipes.filter(recipe => {
            return recipe.strMeal.toLowerCase().includes(searchStr.toLowerCase());
        }));
    }, [searchStr])

    const toggleFav = (recipe) => {
        const i = stateRecipes.findIndex(entry => entry.idMeal === recipe.idMeal);

        if (i === -1) {
            console.log(`Recipe with idMeal: ${recipe.idMeal}, does not exist`);
            return;
        }

        const copy = [...stateRecipes];
        stateRecipes[i].isFav = !stateRecipes[i].isFav;
        setStateRecipes(copy);
    }


    return (
        <div>
            <CardList recipes={displayRecipes} toggleFav={toggleFav}/>
        </div>
    )
}

export default Dashboard;