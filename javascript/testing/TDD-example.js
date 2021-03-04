const letterTranslate = (letter, translateObject) => {
    if (translateObject.hasOwnProperty(letter)) {
       throw new Error('Key does\'t exist'); 
    };

    return translateObject[letter];
}


// splitting a string, word delimeter amd a character delimiter
const splitStr = (inputStr, wordDel, charDel) => {
    
};
// translate a 2nd array of character
module.exports = {
    letterTranslate,
    splitStr
}