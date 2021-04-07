import { firestore } from './firebase.js';

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export const getRecipesAPI = async (search = '') => {
    const response = await fetch(`${API_URL}?s=${search}`);
    const data = await response.json();
    return data.meals;
}

export const cleanRecipes = (recipes) => {
    // condense recipe fields
    // add isFav = false

    const newData = recipes.map(recipe => {
        const ingredients = Object
            .keys(recipe)
            .filter(k => k.startsWith("strIngredient") && recipe[k] !== "")
            .map(k => {
                return recipe[k];
            });

        const newObject = Object.entries(recipe).reduce((acc, item) => {
            if (item[0].startsWith('strIngredient') || item[0].startsWith('strMeasure')) {
                return acc;
            }

            const originalFieldName = item[0];
            const fieldName = originalFieldName.startsWidth('str') 
                ? originalFieldName.charAt(3).toLowerCase() + originalFieldName.slice(4)
                : originalFieldName;
            // 'strCalum' => 'calum

            acc[fieldName] = item[1];
            return acc;
        }, {});

        return { ...newObject, ingredients, isFav: false };
    });

    return newData;
}

// return undefined promise
export const addRecipe = async (recipeObject) => {
    await firestore.collection('favorites').doc(id).set(recipeObject);
}

export const getRecipes = async () => {
    const recipes = await firestore.collection('favourites').get(); //
    return recipes.docs.map(recipe => {
        return {
            ... recipe.data()
        };
    });
}

export const deleteRecipe = async (id) => {
    await firestore.collection('favourite').doc(id).delete();
}