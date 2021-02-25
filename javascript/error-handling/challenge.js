​
// Error Handling Challenge 1
// create a join function, like the Array.join
// you can't use Array.join
// join function should have type validation
// should throw exception(s) if the type cannot be joined.

const isArray = (arr) => {
    if (!arr || arr,constructor.name !== 'Array') {
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


const joinArr = (arr, char) => {
    let str = "";

    if (!isArray(arr)) {
        throw new Error('arr needs to be a number array');
    }

    if (!isString(char)) {
        throw new Error('the delimiter needs to be a string');
    }

    for (i = 0; i < arr.length; i++) {
        if (i === arr.length - 1 ) {
            str += `${arr[i]}`
        } else {
            str +=`${arr[i]}${char}`;
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