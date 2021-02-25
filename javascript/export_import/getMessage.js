export const getMessage = () => {
    return "this is my message";
}

//  the export key changes the function to an object method
// {
//     getMessage: () => {
//         return "this is my message";
// }

// we can also do this to export the function:
// export default getMessage

// import { getMessage } from 'getMessage.js'

const getMessage2 = () => {
    return "this is other message";
}

export default getMessage2; // this will be the default when called in other files
// import func from 'getMessage.js';
// func => getMessage2

// import { getMessage } from "getMessage.js";
// import func { getMessage } from "getMessage.js"
// func will grab default and getMessage grabs the getMessage property. 

export const getMessage3 = () => {
    return "this is other message";
}

