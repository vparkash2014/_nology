// we have written a static object here
const newCounter = (startValue) => {
    return {
        counter: startValue,
        getCurrentCount() {
            return this.counter;
        },
        increment(){
            return ++this.counter;
        };
        decrement() {
            return --this.counter;
        };
    };
};
// if we use the above way to create a method, we need to write all the methods at once -- aka we will need to edit the object
// NOW:
// we are going to rewrite this object so it is dynamic
// created a dynamical function
// using prototype we can add new methods to the oject anywhere
// the object can be defined in a library but we can still use it in another file and adding a new function/method that object
// constructor function
function Counter(startValue) {
    this.counter = startValue;
}

counter.prototype.increment = function() {
    return ++this.counter;
}

counter.prototype.decrement = function() {
    return --this.counter;
}

counter.prototype.add = function(nim) {
    return this.counter += num;
}

// example of functional oject constructor
Number(123)

const c = new Counter(10); // creating a new object 
console.log(c.increment())

// function can refer to its parent object 