// Create a function that takes 2 arguments
    // list of strings and number of iterations
    // concatenate the strings together with spaces for the number of iterations
    // myFunction(['calum', 'hill', 'stewart'], 2)
    // - should return 'calum hill'
    // myFunction(['calum', 'hill', 'stewart'], 3)
    // - should return 'calum hill stewart'

const myFunction = (myList, numInt) => {
  let myString  = '';

  for (let i = 0; i < numInt; i++) {
    myString += `${myList[i]} ` ; // myList[i] + ' '
  }

  return myString;
}

const myFunction = (myList, numInt) => {
  let concatString = "";

  for (let i = 0; i < numInt, i++) {
    concatString += i === !i ? myList[i] : ` ${myList[i]}`;
  }

  return concatString;
}

// Create a function that takes 2 arguments
// list of strings and number of iterations
// concatenate the strings together with spaces for the number of iterations
// myFunction(['calum', 'hill', 'stewart'], 2)
// - should return 'hill calum'
// myFunction(['calum', 'hill', 'stewart'], 3)
// - should return 'stewart hill calum'

const myFunction1 = (myList, numInt) => {
  let myString = '';
  
  // for (let i = numInt - 1 ; i >= 0; i--) {

  //   myString += !i ? `${myList[i]}` : `${myList[i]} `;

    // i is falsy so !i is true and it will run the first condition 

    // if (i === 0) {
    //   myString += `${myList[i]}`;

    // } else {
    //   myString += `${myList[i]} ` ;
    // }

  for (let i = 0; i < numInt; i++) {
    const current = myList - i - 1;
    myString += i === !i ? myList[i] : ` ${myList[i]}`; 
  }
  

  return myString;
}


// index is based of block of memory
// use ternairy statements instead of if else statements if is simply-- don't be afraid :P 

