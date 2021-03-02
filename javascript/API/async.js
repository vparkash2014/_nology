//  lets us excute something in the future 
// this is an asynchronous timeout
setTimeout() => {
    console.log('Timeout finished')
}, 3000);

console.log("I will run before the timeout function")

// js will not stop execution, just because there is  setTimeOut... it will continue with the code until the set time has reached
// js is single-thrended -- it can only run thing after another -- there is one place things can rund

// - synhronous API call
// - Send request = 0.2s
// - receive Response - 0.2s
// - runction that takes 1s

// - Async call
// - Dispatch 0.4s of request time
// - function that takes 0.2s seconds

setTimeout(() => {

}, 3000);
// the 3000s is the min time needed to pass before the function inside runs -- js will finish what is is executing before coming back to this setTimeout-- once 3000s have passed, js will add it to the quene

setInterval(() => {
    console.log('i run once in 1000 ms')
}, 1000;)

// setInterval is also async
