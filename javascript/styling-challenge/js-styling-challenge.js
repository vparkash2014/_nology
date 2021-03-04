// this is my pure functions
const makeRequestion = async (serviceName, url) => {
    console.log(`${serviceName} request has started`);
    const response = await fetch(url);
    return await response.json();
}

const getCatFacts = async () => {
    return await makeRequestion('cat facts', 'https://cat-fact.herokuapp.com/facts');
}

const getAdvice = async () => {
    return await makeRequestion('advice facts', 'https://api.adviceslip.com/advice');
};

// this can have an input of data so it is not async
const generateHTMLString = async () => {
    const catFacts = await makeRequestion('cat facts', 'https://cat-fact.herokuapp.com/facts');

    const factHtml  = catFacts.map(fact => {
        return `<li>${fact.text}</li>`
    }).join('');

    return`<ol>${factHtml}</ol>`;
}

const addFactsToDon = async () => {
    const elem = document.getElementById('catFacts');
    const domStr = await generateHTMLString()
    setTimeout(() => {
        elem.innerHTML = domStr ;
    }, 500);
}

const addAdvicetoDon = () => {
    setInterval( async () => {
        const adviceData = await getAdvice();
        adviceElement = document.getElementById('advice');
        adviceElement.innerHTML = `${adviceData.slip.id}: ${adviceData.slip.advice}`
    }, 3000);
}

const printInputNumber = () => {
    const inputNumber = document.getElementById('inputNumber').value

    if (isNaN(inputNumber)) {
        document.getElementById('inputNumber').value = "";
        return;
    } 

    document.getElementById('outputNumber').innerHTML = `Your number is: ${inputNumber}`;
}


document.getElementById('start').addEventListener('click', printInputNumber);

document.getElementById('start').addEventListener('click', addFactsToDon);

document.getElementById('start').addEventListener('click', addAdvicetoDon)
