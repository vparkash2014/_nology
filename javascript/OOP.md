# OOP => Object Oriented Programming

Using classes/ objext to create block unit of code

Pillars: 

### Abstraction => hide uncessary details from the users of your code. 
  - centralising code in on place
  - aka building methods inside classes so devs don't have to write it over and over again
  - centralising methods and 'rules' (aks firstname.toLowerCase()) into the class
  - there is more chances to make mistakes/bug/typos if it is not centralised


In the example below, toLowerCase and fullname have been centralised / abstracted
```javascript
class Person {
    constructor(f, l) {
        this.first = f.toLowerCase();
        this.last = l.toLowerCase();
    }
​
    get fullName() {
        return `${this.first} ${this.last}`;
    }
}
​
const maddPerson = new Person("Madd", "Sheppard");
const maddFullName = maddPerson.fullName;
​
const remiPerson = new Person("Remi", "Hoeppe");
const remiFullName = remiPerson.fullName;
```


### Encapultation => the idea that all class property inside the class code

```javascript
// Not encapsulated
​
const bookInfo = (title, author, date) => {
    return `${title} was written by ${author} in ${date}`;
}
​
const duneTitle = "dune";
const duneAuthor = "frank";
const duneDate = 1965;
​
console.log(bookInfo(title, author, date));
​
const harryPotterTitle = "Harry Potter: Goblet of Fire";
const harryPotterAuthor = "JK Rowling";
const harryPotterDate = 2000;
​
console.log(bookInfo(harryPotterTitle, harryPotterAuthor, harryPotterDate));
// Encapsulated
​
class Book {
    constructor(title, author, date) {
        this.title = title;
        this.author = author;
        this.date = date;
    }
​
    get info() {
        `${this.title} was written by ${this.author} in ${this.date}`;
    }
}
```


### Inhertiance => aka classes can inherit properties and methods from another class
```javascript
class Track {
    constructor(length, artist, url) {
        console.log("I am running for podcast")
        this.length = length;
        this.artist = artist;
        this.url = url;
    }
​
    get embeddedLink() {
        return `<iframe src="${this.url}"></iframe>`
    }
} 
​
class Podcast extends Track {
    constructor(length, artist, url, comments, guests) {
        super(length, artist, url);
​
        this.comments = comments;
        this.guests = guests;
    }
​
    get stringOfComments() {
        return this.comments.join(', ');
    }
}
​
const pod = new Podcast("2:30", "Joe Rogan", "some url", ["comment 1", "comment 2"], ["Jamie Fox"]);
console.log(pod.stringOfComments);
​
const trackPod = new Track("2:30", "Joe Rogan", "some url");
console.log(trackPod.stringOfComments); // Undefined => function does not exist on Track
```


### Polymorphism => idea that we can have the same method doing different things for different classes/objects
```javascript
class Track {
    constructor(length, artist, url) {
        this.length = length;
        this.artist = artist;
        this.url = url;
    }
​
    get embeddedLink() {
        return `<iframe src="${this.url}"></iframe>`
    }
​
    get info() {
        return `This track is ${this.length} minutes long and created by ${this.artist} `
            + `and it is available at ${this.url}`;
    }
} 
​
class Podcast extends Track {
    constructor(length, artist, url, comments, guests) {
        super(length, artist, url);
        this.comments = comments;
        this.guests = guests;
    }
​
    get stringOfComments() {
        return this.comments.join(', ');
    }
​
    get info() {
        return super.info + `Comments: ${this.stringOfComments}, Guests: ${this.guests.join(', ')}`;
    }
}
```
### Functional <=> OOP Translation
​
#### OOP Approach (Mutatable)
OOP is easier to write and understand than functional programming, but the 
cost is that is requires property mutations to get anything done. This could be
considered a problem because mutations to a class object can break things later
on in our program.
​
In Javascript, OOP will also tend to be more performant than its functional 
counterpart. This is because mutatability does not require copying / cloning
objects like functional programming does.
​
** Keep in mind, the above statement is not true for all languages.
​
```javascript
class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
​
    set firstName(first) {
        this._firstName = first;
    }
    
    set lastName(last) {
        this._lastName = last;
    }
}
```
​
#### Naive Functional Approach (Immutable)
Functional code is harder to write, harder to understand and harder to interact with than OOP code however the benefit is we can get everything done without the chance of mistakes that lead to mutatability bugs.
​
Some tips for writing immutable functional programs:
  - No objects without Object.freeze({...});
  - No using let to declare variables
  - No function side effects (pure functions / code purity)
  - No class mutations (unless it's needed for performance reasons)
  - Recursion to be used instead of for loops (unless you face stack proplems)
​
Functional programs written in javascript can often be slower OOP code, this is because functional programs require a lot of copying. The benefit we get is much safer and easier to test code. It also opens up new ways of looking at processes that can't be easily mimicked by OOP.
​
```javascript
const newPerson = (firstName, lastName) => Object.freeze({firstName, lastName});
const setFirstName = (person, firstName) => Object.freeze({...person, firstName});
const setLastName = (person, lastName) => Object.freeze({...person, lastName});
```
