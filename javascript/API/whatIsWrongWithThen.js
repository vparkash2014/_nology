const catFacts = () => {
    const prom = fetch('url')
    prom
        .then(reponse => response.json());
        .then(data => {
            const elem = document.getElementById("catfacts");

            const factHtml  = data.map(fact => {
                return `<li>${fact.text}</li>`
            }).join('');

            elem.innerHTML = `<ol>${factHtml}</ol>`
        });
};

catFacts();

// lets rewrite it
const getCatFacts = async () => {
    const repsonse = await fetch('url');
    return await Response.json();
    // I have access to the json here
}

const generateHTMLString = async () => {
    const catFacts = await getCatFacts();

    const elem = document.getElementById("catfacts");

    const factHtml  = data.map(fact => {
        return `<li>${fact.text}</li>`
    }).join('');

    return`<ol>${factHtml}</ol>`;
}

const addFactsToDon = async () => {
    const elem = document.getElementById('catFacts');

    elem.innerHTML = await generateHTMLString();
}

addFactsToDon();
console.log('this is going to run first')
