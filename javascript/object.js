// list are collection of things, label things with numeric index, implicit,ordering and have methods

// book information
// author: frank herbert
// title: dune
// date: 1965

const dune = {
    author: "frank herbert", // this is a proporty
    title: "dune",
    date: 1965
}

const shantaram = {
    title: "shantaram",
    author: "gregory",
    date: 2003
}

`${dune.title} was written by ${dune.author} in ${dune.date}`

`${shantaram.title} was written by ${shantaram.author} in ${shantaram.date}`

Object.value(dune)  // returns the values in dune
Object.keys(dune) // returns the property names
Object.entries(dune) // returns property and value

// checking if all the fields or properties you need are in the object
const requiredFields = ['author', 'title', 'date'];
requiredFields.every(field => dune.hasOwnProperty(field));
requiredFields.every(field => Object.keys(dune).includes(field));

const requiredTypes = ['string', 'string', 'number']

const required = {
    author: "string";
    title: "string";
    date: "number";
}

required.entries(entry => {
    const [currentKey, currentType] = entry;

    return Object.keys(dune).includes(currentKey)
        && typeof dune[currentKey] === currentType;
})

const book = [{
    author: "frank herbert", // this is a proporty
    title: "dune",
    date: 1965
}, {
    title: "shantaram",
    author: "gregory",
    date: 2003
}]

book.push({
    author: 'jk rowling',
    title : "harry potter",
    date: 1992
})

book.forEach(book =>
    `${book.title} was written by ${book.author} in ${book.date}`)