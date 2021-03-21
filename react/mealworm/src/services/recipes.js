const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export const getRecipes = async (search = '') => {
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

            acc[item[0]] = item[1];
            return acc;
        }, {});

        return { ...newObject, ingredients, isFav: false };
    });

    return newData;
}