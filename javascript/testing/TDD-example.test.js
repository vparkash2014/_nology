const { expect, test } = require('@jest/globals');
const { describe } = require('yargs');

const { letterTranslate } = require('./good-js.js');


describe('letterTranslate tests', () => {
    const toMorse = {
        'a': '.--',
        'b': '--.',
        'c': '-.-.'
    }
    
    const toEnglish = Object.entries(toMorse).reduce((acc, entry) => {
        acc[entry[1]] = entry[0];
        return acc;
    }, {});

    const valueNotExistsError = new Error('Key does\'t exist')

    test('undefined input', () => {
        expect(() => letterTranslate(undefined, toMorse)).toThrowError(valueNotExistsError);
        expect(() => letterTranslate(undefined, toEnglish)).toThrowError(valueNotExistsError);
    });

    test('character input that doesn\'t exist in object', () => {
        expect(() => letterTranslate('d', toMorse)).toThrowError(valueNotExistsError);
    });

    test('character input that does exist', () => {
        expect(letterTranslate('a')).toBe(toMorse['a']);
        expect(letterTranslate('.--', toEnglish)).toBe(toEnglish['.--']);
    });
});

describe('splitStr tests', () => {
    const englishStr = 'I am a test';
    const englishArr = [['I'], ['a', 'm'], ['a'], ['t','e','s','t']]
    const morseStr = '.-- . / .... .- -.. / -.-. .... .. .--. ...'
    const morseArr = [['.--', '.']['....', '.- -..']['-.-.' '....' '..' '.--.' '...']]
    const arrayTest = ['I', 'am', 'not', 'a', 'string']
    const numTest = 10;

    const inputNotStr = new Error('Input is not a string')

    test('Not a string input', () => {
        expect(() => splitStr(arrayTest, '', '')).toThrowError(inputNotStr);

        expect(() => splitStr(numTest, '', '')).toThrowError(inputNotStr);
    });

    test('Word delimiter is not a string', () => {
        expect(() => splitStr(englishStr, arrayTest, '')).toThrowError(inputNotStr);

        expect(() => splitStr(englishStr, numTest, '')).toThrowError(inputNotStr);
    })

    test('Character delimiter is not a string', () => {
        expect(() => splitStr(englishStr, '', arrayTest)).toThrowError(inputNotStr);
        expect(() => splitStr(englishStr, '', numTest)).toThrowError(inputNotStr);
    })

    test('check output is a 2D array', () => {
        expect(splitStr(englishStr, ' ', '').length).toBe(2);
        expect(splitStr(morseStr, '/', ' ').length).toBe(2)
    });

    test('check output is correct', () => {
        expect(splitStr(englishStr, ' ', '')).toMatchObject(englishArr)
        expect(splitStr(morseStr, '/', ' ').length).toMatchObject(morseArr)
    });
})