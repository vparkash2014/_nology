// fetch allows us make ...
// the fetch statement will interact with the webpage with the method you specify
// Promise is an object that is a placehold- because of latecy, we won't get the result/data right away, so it will create a promise object and then fill it in when we recieve the data 
const prom = fetch('https://cat-fact.herokuapp.com', {method: 'GET'}) // Promise object

// when the promise is resolved, then "then" with run (aka the following code)
//callback is any function in another function: response.json() function will be excuted when promise is filled
prom.then(response => response.json()) // registering a all callback for when the value is return 
  .then(data => console.log(data)); // when the data and reponse are done, then it will print the data out

console.log(prom)

// Fetch -> promise to a response (response that won't be there straight away)
// Promise.then -> when the response is there, call this function on the resolve response
prom.then(response => { // response -> resolved respone object
    return response.json();
})
.then(data => console.log(data)); // data is going to be json resolved object

console.log('First state', prom)
prom.then(response => {
    console.log('second state', prom); //raw json response-- this is also a promise object
    return response.json();
});
.then(data => console.log("third state", data));//the stream is resolved and we have all the data 

// summary:
// 1. setting up our request
// 2. send out request
// 3. first .then will trigger when server communicates back
// 4. second .then will trigger when we've downloaded all the information

// clinet tcp <-> server tcp file 

// why do we use two thens? b/c the first is a promise object so the second then will do stuff
prom.then(response => response.json()) //first bit of information from server
.then(data => console.log(data)); // when all information is download -- this is not triggered until it has all the information 

// we don't access with values that are inside .then, outside of .then-- aka we have to use .then to call them
// we can send multiple request using Promise.all([request, request])


// async funtion 
// rewrote the .then with asyn
const myAsyncFunction = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com', {method: 'GET'}) // will give you the result back

    const jsonRespone = await response.json();
    console.log(jsonRespone);
}

myAsyncFunction() // this will behavior like setTimeOut-- it won't block the rest of the script & it will run once it is all resolved 

//Example
const 