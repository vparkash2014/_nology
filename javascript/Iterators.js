
// Iterators 


const newArr = [1,2,3,4,5,6,7,8,9,10];

console.log(newArr.join());
newArr.reverse();
console.log(newArr.join());

newArr.reverse();

const join = (arr, delim = ',') => {
    if (arr.constructor.name !== 'Array') {
        return `${arr} is not an array`;
    }

    if (typeof delim !== 'string') {
        return `${delim} is not a string`;
    }

    let str = "";

    for (let i = 0; i < arr.length - 1; i ++) {
        str += `${arr[i]}${delim}`;
    }

    return str + `${arr[arr.length - 1]}`;
}

// checking if the value is in the array
const find = (arr, value) => {
    let i = arr.length;

    while (i--) {
        if (arr[i] === value) {
            return arr[i];
        }
    }
}

// this function finds index and value
const findEntry = (arr, value) => {
    let i = arr.length;

    while (i--) {
        if (arr[i] === value) {
            return [i,arr[i]];
        }
    }
}

// callback is a function
// we are passing a function in realFind
// readfind will pass every element in array into a function (callback) and return the first value that the function will send true
const realFind = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}

console.log(realFind(newArr, item => item > 3))
console.log(realFind(newArr, item => item > 6))


const incElem = (arr) => {
    const mapped = []
    for (let i = 0; i < arr.length; i++) {
        mapped.push(arr[i] + 1);
    }

    return mapped
}

// map calls a function on every element in an array
const mapped = newArr.map(item => item + 2)

// this is what map looks like under the hood
const map = (arr, callback) => {
    const newArr = [];

    for (let i =0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }

    return newArr;
}

console.log(map(newArr, item => undefined));

console.log(map(newArr, item => item * 5));

console.log(newArr.map((item, i) => [i, item]));

//  map creates a brand new array-- it does modify the existing one

// every check if a condition is true for all items in the list
newArr.every(item => item > 0); // true
newArr.every(item => item > 5); // false

const newNewArr = newArr.reverse()
    .map(item => item * 5)
    .every( item => item % 5 === 0);  // true

const every = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i)) {
            return false;
        }
    }

    return true;
}

every(mappedArr, item % 5); 

newArr.map(item => item * 10);
newArr.every(item => item % 5 === 0);
newArr.map(item => item * 10).find(item => item % 30 === 0);

// some
newArr.some(item => item % 5 === 0);

const some = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) {
            return true;
        }
    }

    return false;
}

// forEach return undefines
let mapped = []
newArr.forEach(item => {
    mapped.push(item = 5);
});
// this is the same as 
const mapped = newArr.map(item => item * 5);

// use forEach to debug
mapped.forEach(item => console.log(item));

// filter

newArr.filter(item => item % 2 === 0); [2, 4, 6, 8, 10]
newArr.filter(item => item % 2 === 0 & item % 3 === 0); // [6]