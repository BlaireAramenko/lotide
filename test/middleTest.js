/* const middle = require('../middle');

const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
const array1 = [1, 2, 3, 4, 5];
const array2 = [3];
assertArraysEqual(middle(array1), array2);

const array3 = [1, 2, 3, 4];
const array4 = [2, 3];
assertArraysEqual(middle(array3), array4); */

const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 3];
    assert.deepEqual(middle(input), expectedOutput);
  });
});