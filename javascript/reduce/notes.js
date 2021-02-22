const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

let acc = 0; // acc is short for accumulator 

for (let i = 0; i < arrOfNumbers.length; i++) {
    acc += arrOfNumbers[i];
}

console.log(acc); 

// we can do this with a while loop too
let i = arrOfNumbers.length;
acc = 0;

while(i--) {
    acc += arrOfNumbers[i];
}
console.log(acc)

// we can use a forEach but is is bad
arrOfNumbers.forEach( item => {
    acc += item;
});

// we should use a reduce!!
arrOfNumbers.reduce( (acc, item) => acc + item, 0);

// if you don't specify the starting pt, it will get the first index and a starting pt. 
console.log(arrOfNumbers.reduce( (acc, item) => acc - item, 0)); // -46
console.log(arrOfNumbers.reduce( (acc, item) => acc - item)); // -44

// we use reduce in situation when are changing a list to something else
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let output = arr.reduce((acc, num) => `${acc} + ${num}`);
console.log(output);
output = arr.reduce((acc, num) => `${acc} + ${num}`, '+');
console.log(output);

// we can use reduce to write more efficent code 
console.log(arr.map( item => item + 1).join('+'));
console.log(arr.reduce((acc, item) => `${acc} + ${item + 1}`)); // this doesn't work

output = arr.reduce((acc, item) => {
    if (acc === '') {
        console.log('one', acc, item);
        acc += `${item + 1}`;
        console.log ('two', acc);
    } else {
        console.log('three', acc, item);
        acc += `${acc}+${item + 1}`;
        console.log('four', acc);
    };

    return acc;
}, '')

// console.log(output)

// why using reducing: can change data types very easily-- when generating value from array into another type of data type