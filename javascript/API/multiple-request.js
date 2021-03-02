// the fetch is a promise
// the response.json() is also a promise

// by writing it this way we only have access to data and NOT the response-- response stores all the meta data which you might need it 
// this statement relies on sideeffects 
const catFacts = (index) => {
    const prom = fetch('url')
    prom
        .then(reponse => response.json());
        .then(data => {
            console.log(data)
            console.log(`${index} is complete`)
        });
};


// by writing it this way we have access to the response
// const catFacts = () => {
//     const prom = fetch('url')
//     prom .then(response => {
//         reponse.json().then(data => {
//             console.log(data, reponse)
//         })
//     }
// };

// this function will start the fetches first (aka it will send the request first)
// the request are sent in the right order but the order that they come back is random-- it depends on how long each request takes which is random so the console.log(`${index} is complete`) don't output in order
const multipleRequests = () => {
    let i = 5;

    while (i--) {
        catFact();
    };
}

multipleRequests();

// with async and await we have acces with response and data
// we also don't have nest so it is a lot cleaner
const catFacts = async (index) =>{
    const response = await fetch('url'); //fetch is a promise, and await returns the results -- it waits for the results to be fully sent back
    const data = await reponse.json();
}

//catFact returns a promise so any function that rely on it need to be a async function and have await on the call 

// using await, it will send the request one at a time. it will send the first request, wait for the result and when it recieves all the data, it will send the second request
const multipleRequests = async () => {

    let i = 5;

    while (i--) {
        await catFact(i);
    };
}

// buy using promise.All the request won't block each-- they will be submitted at the same time-- this is more time short
// we have to prepare all the promises- so more work but doesn't rely on sideaffects
const multipleRequests = async () => {
    const promises = [];

    for (let i = 0; i < 6; i++) {
        promises.push(catFacts());
    }
    
    const results = await Promise.All(promises);

    results.forEach((response, index) => console.log(index, response))
}

// two APIs
const makeRequestion = async (serviceName, url) => {
    console.log(`${serviceName} request has started`);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const catFacts = async () => {
    return await makeRequestion('cat facts', 'url1');
}

const advice = async () => {
    return await makeRequestion('advice facts', 'url2');
}

const multipleRequest = async () => {
    const promise = [catFact(), advice()];
    const result = await Promise.all(promise); // can't pass an object into promise.all

    result 
}