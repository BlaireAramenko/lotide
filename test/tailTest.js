/* Old test code
 
const tail = require('../tail');

const assertEqual = require('../assertEqual');

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.length, 100); */

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expectedOutput);
  });
});

describe('#assertEqual', () => {
  it('throws an error when values are not equal', () => {
    const array1 = 3;
    const array2 = 5;
    const errorMessage = `💔 Assertion Failed: ${array1} !== ${array2}`;
    assert.throw(() => assertEqual(array1, array2), errorMessage);
  });
  it('does not throw an error when values are equal', () => {
    const array1 = 2;
    const array2 = 2;
    const successMessage = `💕 Assertion Passed: ${array1} === ${array2}`;
    assert.doesNotThrow(() => assertEqual(array1, array2), successMessage);
  });
});

