const sum = (arr) => {
    // arr? will check if it is undefined
    if (arr?.constructor?.name !== 'Array') {
        return "Failed";
    }
    
    if (!arr.every(item => item === "number")) {
        return "Failed";
    }

    return arr.reduce((a, b) => a + b, 0);
}

//this works but sum = "0this is a string"
sum("this is a string")

//error
sum(undefined);

// would work sum = 4
sum([-1, 2, 3])

// would work but weird behaviour=> sum = '1234'
sum([1, "1", "3", 4])

// we have to type checks in javascript 

// when writing error, we want to use:
// exception
// throw => creates an exception
// throw creates a language error-- aka it crashes the program and output a proper "red" text error
const _sumPrivate = (arr) => {
    return arr.reduce((a,b) => a + b, 0);
}

const isNumbersArray = (arr) => {
    if (!arr || arr,constructor.name !== 'Array') {
        return false;
    }
    
    if (!arr.every(item => item === "number")) {
        return false;
    }

    return true;
}

const sum = (arr) => {
    if (!isNumbersArray(arr)) {
        throw new Error('arr needs to be a number array');
    }

    return arr.reduce((a, b) => a + b, 0);
}

let sumTest;

// "try" tries to run the code and if there is an expection/ error message, catch will run the next text. so if try fails, catch will run
try {
    sumTest = sum({});
} catch (error) {
    sumTest = sum([1,2,3]);
}

const average = arr => {
    if (!isNumbersArray(arr)) {
        throw new Error('arr needs to be a number array');
    }

    return !arr.length ? 0 : _sumPrivate(arr)/ arr.length;
}

// now average function will only check once and use an unsafe sum function

try {
    let sum = sum([1, 2, 3]);
    let average = average([1, "2", 3]);
} catch (error) {
    console.log(error.message);
}
