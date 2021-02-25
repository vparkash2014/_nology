class Person {
    constructor (title) {
        this._firstName = firstName;
    }

    set firstName(first) {
        this._firstName = first.toLowerCase()
    }

    get firstName() {
        returnthis._firstName
    }
}

export default Person;