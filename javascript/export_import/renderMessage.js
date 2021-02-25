// since this is a module, you cant use it the function in HTML but you can fix it

// import{ getMessage, getMessage3, Book } from './getMessage.js' // './fileName' is the current directory

// const renderMessage = () => {
//     document.getElementById('message').textContent = getMessage();
    
// }

// document.getElementById('showMessage').addEventListener('click', renderMessage);

// renderMessage();
import Person from './person.js';

const firstNameInput = document.getElementById('firstName');

const renderMessage = event => {
    event.preventDefault();
    const person = new Person(firstNameInput);

    output.testContext = person.firstName;
}

document.getElementById('personForm').addEventListener('sumbit', renderMessage);