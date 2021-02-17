// Create a function that takes 2 arguments
    // list of strings and number of iterations
    // concatenate the strings together with spaces for the number of iterations
    // myFunction(['calum', 'hill', 'stewart'], 2)
    // - should return 'calum hill'
    // myFunction(['calum', 'hill', 'stewart'], 3)
    // - should return 'calum hill stewart'

const myFunction = (myList, numInt) => {
  let myString = ' ';

  for(let i = 0; i < numInt; i++) {
    myString += `${myList[i]} ` ;
  }

  return myString;
}

// Create a function that takes 2 arguments
// list of strings and number of iterations
// concatenate the strings together with spaces for the number of iterations
// myFunction(['calum', 'hill', 'stewart'], 2)
// - should return 'hill calum'
// myFunction(['calum', 'hill', 'stewart'], 3)
// - should return 'stewart hill calum'

const myFunction1 = (myList, numInt) => {
  let myString = ' ';

  for(let i = numInt - 1 ; i >= 0; i--) {
    myString += `${myList[i]} ` ;
  }

  return myString;
}

