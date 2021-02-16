
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

    console.log('parent scope' myFullNameString);

    const myInformation = () => {
      // this is the fourth scope-- this scope can use all the global and parents scopes
      // this function exist inside myFullName, it can only be called inside myFullName

      console.log("age", myAge);
      console.log("Fullname", myFullNameString);
      console.log("My first name:" myNameString);
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


