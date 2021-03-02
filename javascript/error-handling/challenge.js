​
// Error Handling Challenge 1
// create a join function, like the Array.join
// you can't use Array.join
// join function should have type validation
// should throw exception(s) if the type cannot be joined.

const isArray = (arr) => {
    if (!arr || arr.constructor.name !== 'Array') {
        return false;
    } 

    return true;
}

const isString = (str) => {
    if (typeof str !== "string") {
        return false;
    }

    return true;
}

const joinArr = (arr, delim) => {
    let str = ""; 

    if (!isArray(arr)) {
        throw new Error('arr needs to be a number array');
    }

    if (!isString(delim)) {
        throw new Error('the delimiter needs to be a string');
    }

    for (i = 0; i < arr.length; i++) {
        if (i === arr.length - 1 ) {
            str += `${arr[i]}`
        } else {
            str +=`${arr[i]}${delim}`;
        }
    }

    return str;
};

let test;

try {
    test = joinArr(["I", "am", "hungry"], " ");
    test = joinArr(["I", "am", "hungry"], [" "])
} catch (error) {
    console.log(error.message);
}

// Error Handing Challenge 2
// create a poppedResult function 
//
// / Strings:
// should remove the last character from the string
// and return the string with the last character missing
//
// Arrays:
// should remove the last element in an array
// and return the array with the last element missing

const poppedResult = (input) => {
    if (!isArray(input) && !isString(input)) {
        throw new Error('arr needs to be an array or string');
    }

    if (isString(input)) {
        let output = "";
        for (i = 0; i < input.length -1; i++) {
            output += input[i];
        }
        
        return output;
    }

    if (isArray(input)) {
        let output = [];
        for (i = 0; i < input.length - 1; i++) {
            output = [...output, input[i]];
        }

        return output;
    }
}

try {
    console.log(poppedResult(["I", "am", "hungry"]));
    console.log(poppedResult("I am hungry"));
    const fault = poppedResult(undefined)
} catch (error) {
    console.log(error.message);
}

/// calums's solution
const poppedResult = value => {
    if (value === undefined) {
        throw new Error("Value can't be undefined");
    }

    const valType = value.constructor.name;

    if (!['String', 'Array'].includes(valType)) {
        throw new Error("Value can only be array or string");
    }

    let acc = valType === 'Array' ? [] : "";

    for (let i = 0; i < value.length - 1; 1++) {
        valType === 'Array' ? acc.push(value[i]): acc += value[i];
    }
    return acc;
    // we can replace the whole acc & for loop with the following lines
    // return value.slice(0, value.length -1);
}