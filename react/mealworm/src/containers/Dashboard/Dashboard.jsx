import CardList from '../../components/CardList';
import {
    addRecipe,
    deleteRecipe
} from '../../services/recipes.js'

const Dashboard = ({ recipes, setRecipes }) => {

    const toggleFav = async (recipe) => {
        const recipeCopy = { ...recipe, isFav: !r.isFav };

        recipeCopy.isFav
            ? addRecipe(recipe.idMeal, recipe)
            : deleteRecipe(recipe.idMeal)
    }

    setRecipes(recipes.map(r => {
        return r.idMeal !== test;
    }))


    return <CardList recipes={recipes} toggleFav={toggleFav} />;
}

export default Dashboard;