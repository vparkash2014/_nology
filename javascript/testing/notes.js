// to create an "testing environment"
// go to directory and  run the following commands
// $ npm init"
// $ npm install --save-dev jest 
// create a file 'CodeName.test.js'-- jest reads this file to run the test

// jest gives us two function
// 1. describe => group test together
//normally writing one describe block per function

//syntax:
// describe('description', () = {

// })

// 2. test =>

// exmaple 
describe('string-- description', () => {
    test('test description', () => {
        const output = function(input);

        expect(output).toBe(expectOutput);
    });
});

// expect return object
// toBe return booleen

// the expect object has loads of methods so we don't have use toBe, we can also use toMatchObject-- depends on what you want to do-- check it out

