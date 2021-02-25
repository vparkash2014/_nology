// Js class is used to create an objects.
// the class itself isn't an object but it creates an object
class Counter {
    constructor(startValue) {
        this.counter = startValue;
    }

    increment() {
        return ++this.counter;
    }

    decrement() {
        return --this.counter;
    }

    current() {
        return this.counter;
    }

    add(num) {
        this.counter += num;
        return this.counter;
    }
}

const c = new Counter(10);

console.log(c.counter);
console.log(c.increment);
console.log(c.counter);


class Book {
    constructor(firstName, lastName, title, yearDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.yearDate = yearDate;
        this.additionalInformation = [];
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    info() {
        return `${this.title} eas written by ${this.fullName()} in ${this.yearDate}`
    }

    addInformation(informationStr) {
        this.additionalInformation.push(informationStr);
        return this.additionalInformation
    }

    setFirstName (firstName) {
        this.firstName = firstName;
    }
}

const dun = new Book("Frank", "Herbet", "Dune", 1965);
console.log(dune.fullName())
console.log(dune.info())
console.log(dune.addInformation("Frank herbert died in x in y"))
console.log(dune.firstName("john"))
console.log(dune);


// Getter and Setter
// getter grabs new properties 
// a setter changes default properties

class Person {
    constructor(firstName, lastName, age = 23) {
        this.firstN = firstName,
        this.last = lastName;
        this.age = age;
    };

    get firstName() {
        return this.firstN;
    }

    get lastName() {
        return this.lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get infoString() {
        return `this person's name is ${this.firstName} ${this.lastName} and he is ${this.age} years old`;
    }

    // lowercase the firstname setting it
    //this will over-writes the orginaly property
    //this is way of setting rules to property
    set FirstName(firstN) {
        this.firstName = firstName.toLowerCase();
    }

    set fullName(fullNameString) {
        [this.firstN, this.lastN] = fullNameString.split(" ");
    }
}

const person = new Person("calum", "hill");

person.getFullName() // this is a method call
person.FullName // this is now a property 
person.infoString // can access this as a property 

person.FirstName("vaish"); // using a getting to reset property


//underscore proptery 
// private implicit property
// private by convention but are still public -- there is nothing in the language to stop the developer from changing it or accessing 
// it is more of a warning to developers 

class Book {
    constructor(date, title, authr) {
        this.date = date;
        this.title = title;
        this._author = author;
    }
}

// you can use # to make things private
// i can't access the private property outside the class but can access inside the class
// you use them to make sure outsiders don't change the property and break the code


// don't use # because it only works on chrome!!! 
class Book {
    constructor(date, title, authr) {
        this.date = date;
        this.title = title;
        this._author = author;
    }

    #getRawData() {
        return this.data;
    };

    // can only access private properties and method inside the class
    get BookInfo() {
        return `${this.title} was publised in ${this.#getRawData()}`;
    }
}

console.log(book.#getRawData()) // this won't work because it is private
console.log(book.getBookInfo) // this will work