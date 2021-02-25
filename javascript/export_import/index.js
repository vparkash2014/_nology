export const clickAction = () =>{
    alert("you've clicked a button");
}

// export also you to export things to other files
// module is a unit code or self contained set of function/ code that does rely on other piece of code-- standard alone

//  file1.js -- module
const getMessage = () => {
    return "this is my message"
}
// file2.js -- module
const renderMessage = () => {}
// you need to use golive btto