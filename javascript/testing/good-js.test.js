const { expect, test } = require('@jest/globals');
const { filterOdds } = require('./good-js.js');

console.log(filterOdds([]));

describe('Unit tests for filterOdds function', () => {
    test('empty array input', () => {
        expect(filterOdds([])).not.toMatchObject([1, 2, 3])
        expect(filterOdds([])).toMatchObject([]);
    });

    test('ONLY even numbers input', () => {
        const inOut = [2, 4, 6];

        expect(filterOdds(inOut)).toMatchObject(inOut);
    });

    test('ONLY odd numbers input', () => {
        const input = [1, 3, 5, 7, 9];

        expect(filterOdds(input)).toMatchObject([]);
    });

    test('1 - 5 array', () => {
        const input = [1, 2, 3, 4, 5];
        const output = [2, 4];

        expect(filterOdds(input)).toMatchObject(output);
    });
});