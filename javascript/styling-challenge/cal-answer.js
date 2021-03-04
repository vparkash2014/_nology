const button = document.getElementById('start');

// Number I/O Handling
const isNumeric = thing => !isNaN(thing); 

const generateOutputNumberText = (numericValue) => {
    return `Your number is: ${numericValue}`;
}

const doSomethingWithNumber = () => {
    const inputNumber = document.getElementById('inputNumber');
    const outputNumber = document.getElementById('outputNumber');

    if (!isNumeric(inputNumber.value)) {
        inputNumber.value = "";
        return;
    } 

    outputNumber.innerHTML = generateOutputNumberText(inputNumber.value);
}

// Cat Facts
const makeRequest = async (url) => {
    const response = await fetch(url)
    return await response.json();
}

const getCatFacts = async (func) => {
    return await func('https://cat-fact.herokuapp.com/facts');
}

const generateLi = str => `<li>${str}</li>`;

const generateOl = listOfStrings => {
    const lis = listOfStrings.map(generateLi);
    return `<ol>${lis.join('')}</ol>`
}

const getFactText = factObject => factObject.text;

const doSomethingWithCatFacts = () => {
    setTimeout(async () => {
        const elem = document.getElementById('catFacts');
        const data = await getCatFacts(makeRequest);
        const listOfFacts = data.map(getFactText);
        const olHtml = generateOl(listOfFacts);
        elem.innerHTML = olHtml;
    }, 500);
}

const getAdvice = async (func) => {
    return await func('https://api.adviceslip.com/advice');
}

const getAdviceInfo = (adviceObject) => {
    return `${adviceObject.slip.id}: ${adviceObject.slip.advice}`
}

let currentInterval;

const doSomethingWithAdvice =  () => {
    if (currentInterval) {
        console.log("I've cleared interval: ", currentInterval);
        clearInterval(currentInterval);
    }

    currentInterval = setInterval(async () => {
        console.log('hello');
        const adviceElement = document.getElementById('advice');
        const data = await getAdvice(makeRequest);
        adviceElement.innerHTML = getAdviceInfo(data);
    }, 3000);
}

button.addEventListener('click', doSomethingWithNumber);
button.addEventListener('click', doSomethingWithCatFacts);
button.addEventListener('click', doSomethingWithAdvice);