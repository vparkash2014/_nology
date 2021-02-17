
//  syntax
// ES5 and below
function functionName() {}

// ES6 --  the latest standard guide for js so we should get into a habit of using this one
const functionName = (arguments) => {
  //  code to be excuted
  return; // this will return undefinded unless we specifiy a return value
}

// this function will return "undefined" if we don't have a 'return" value

// javascript does not read arrow function ahead of time. arrow function are variables so need to be in the right order. 

// functions are just values we can pass around. we can use 'let' but we don't people changing our functions around so we should use 'const'

// global scope is the first indention level of all our program 

// local scope is the everything after the 1st indention

//lower level scope can use things from the higher scope. aka local scopes can use things in the global scopes

const myNameString = "callum";

const myName = () =>  {
  console.log(myNameString);
  // this block is not global but you can still use global variables even though the function has no arguments 
}

// this is an example of 4 scopes

const myName = () =>  {
  // this is the second scope
  const myFullNameString = myNameString + ' ' + "Hill";

  const myFullName = () => {
    // this is a third scope
    const myAge = 23;

    console.log('Global', myNameString);

    console.log('parent scope', myFullNameString);

    const myInformation = () => {
      // this is the fourth scope-- this scope can use all the global and parents scopes
      // this function exist inside myFullName, it can only be called inside myFullName

      console.log("age", myAge);
      console.log("Fullname", myFullNameString);
      console.log("My first name:", myNameString);
      console.log("my height", myHeight()); // this is undefined since myHeight is not defined 
    }
    
    const myHeight = () => {
      return "160cm";
    }

    myInformation(); // now nyHeight is defined so it will work but don't do this! put myheight before myInformation
  }

  myFullName();
}

myName();



// functions in global scopes create their own heiarchy so any variables in them can't use in another global function because they are isolated. so you can't use myFirstName in myAge
const nyName = () => {
  const myFirstName = "calum";
}

const myAge = () => {
  const printAge = () => {

  }
}


// arguments - variable you intend the user to pass in
// positional arguments -- we expect the arguments in the order we have given
const myFullName  = (firstName, lastName) => {

  const myInformation = () => {
    console.log(firstName, lastName);
  }
  return firstName + ' ' + lastName; 
}

myFullName("Calum", "Hill");


// one line functions aka emplicated return values
const rectanglePerimeter = (width, height) => (width + height) * 2;

const circleArea = (radius) => Math.PI * radius ** 2;

const circlePerimeter = (radius) => 2 * Math.PI * radius;

const checkTruthyWithDefault = (value, defaultValue) => {
  if (value) {
    return value;
  };
  return defaultValue;
}

// below is a ternary statement
const checkTruthyWithDefault = (value, defaultValue) => value ? value : defaultValue;

// <boolean expression> ? <if true return value> ':' <else defaultValue>

// example on why not to use let
let myAge = 23;

const doSomeThingWithAge = (age) => age * 2;

console.log(doSomeThingWithAge());

const changeAge = () => myAge = "my age is 45";

changeAge()
console.log(doSomeThingWithAge()); // this won't work because myAge is now a str


// the code below is an example of how to use const to set a variable but still change it
const counter = 0;
const increment = (count) => ++count;

const count1 = increment(counter);
const count2 = increment(count2);
const count3 = increment(count2);
console.log(count3);

// side note -- the order of ++ matters
++counter // increments the counter by 1 and then returns it
counter++ // returns the counter without incrementing it 

let count = 1;
console.log("A. ", count++ * 3) // 3 --> count * 3 ++ where count is 1
// count is now 2
console.log("B. ", ++count + 3) // 6 --> count++ +2 (2+1 + 2)

let count = 1;
console.log(count++ * 3); // ((1 * 3) == 3) then it increments it
// count is now 2
console.log(count++ + 3); //  (2+3) == 5 then it increments it
// count is now 3 
console.log(++count * 4); // (1+3) * 4 = 16
// count is 4


// When defining variables use caplocks for global variable and lowercase for local variables
MAX_AGE = 80
NUMBER_OF_DAYS = 365

const calculateSupply = (age, amountPerDay) => {
  if (typeof age !== 'number' || typeof amountPerDay !== 'number') {
    return `${typeof age}: ${age} or ${typeof amountPerDay}: ${amountPerDay} is not a number` }

    const noOfBars = (MAX_AGE - age) * NUMBER_OF_DAYS * amountPerDay;

    return `You will need ${noOfBars} to last you until the ripe old age of ${MAX_AGE}`
}