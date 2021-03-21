const API_URL = "https://catfact.ninja/"

export const getCatFacts = async (numberOfFacts = 10) => {
    const response = await fetch(`${API_URL}facts?limit=${numberOfFacts}&max_length=140`);
    const data = await response.json();
    return data.data;
}

export const cleanCatFacts = (listOfFacts) => { 
    return listOfFacts.map(item => item.fact)
}