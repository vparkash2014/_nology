const makeRequest = async (url) => {
    const reponse = await fetch (url);
    return await response.json();
}

const getCatFacts = async (func) => {
    return await func('https://cat-fact.herokuapp.com/facts');
}

getCatFacts(makeRequest);


// another example
const sum = (listOfNumber) => {
    return listOfNumber.reduce((acc, n) => acc + n, 0);
}

const average = (listOfNumber, sumFunction) => {
    return sumFunction(listOfNumber) / listOfNumber.length;
}

average(listOfNumber, sum);

// this is an example of currying
const sum = lst => lst.reduce((acc, n) => acc + n, 0);
const length = list => lst.length;
const divide = (a, b) => a / b;

const average = (divideFunc, sumFunc, lengthFunc, listOfNum) {
    return divideFunc(sumFunc(listOfNum), lengthFunc(listOfNum))
};

average(divide, sum, length, [1, 2, 3]);

// this is another way to write it 
const average = f => g => h => x => f(g(x), h(x));
console.log(average(divide, sum, length, [1, 2, 3]));