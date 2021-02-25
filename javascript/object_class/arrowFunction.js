// 'normal' function are evulated before the program runs
// doesn't matter where you place them
function myFunction() {
    anotherFunction();
}

// arrow functions have to be written before you run them
const myfunction = () => {};

const myObj = {
    counter: 0,
    getCurrentCount() {
        return this.counter;
    },
    increment: function (){
        return ++this.counter // refers to the object it is inside -- hoisting -- the this keyword hoist the content from the parent
        ;
    };
    decrement() {
        return --this.counter;
    }
};


// arrow function does not have a 'this' keyword so can't hoist. arrow function does not a context. 
// use normal function when creating object method, class methods & prototype method
//this.context is mutible
myObj.increment();