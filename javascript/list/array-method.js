// array methods

// arrays and list are the same objects

let strList = [1, 2, 3, 4, 5, 6];

strList.slice(0, 3); // will give my the first 2 items in the array

strList.join('-a-'); // will contact all the string with '-a-' as a separator. ',' is the default


const conactString = (strList, noOfIt) => {
    return strList.slice(0, noOfFit).join(', ');
}

const conactStringReverse = (strList, noOfIt) => {
    constant sliceValue = strList.length - noOfFit;
    return strList.slice(sliceValue).reverse().join(' ');
}


strList.slice(3); // it will slice out anything with less then index 3

strList.push("calum") //[1, 2, 3, 4, 5, 6, "calum"] -- adds element to the end of an array

strList.pop() // removes last element of list == "calum"

strList.shift() // remove the first element and return the value  == 1

strList.unshift() // adds element to the start of the array


Array.prototype.push // adds elements to the end of the array
Array.prototype.unshift // adds elements to the start of an array
Array.prototype.splice // adds elements at specified position

Array.prototype.pop // removes elements from end of list
Array.prototype.shift // remove elements from the beginning of a list

Array.prototype.slice // select part of an array
Array.prototype.reverse // reverse order of elements in list
Array.prototype.join // concatenate elements into a string