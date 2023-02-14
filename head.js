/* remove 
 const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }

};
*/

const assertEqual = require('./assertEqual');

let array = [];
const head = function(array) {

  return array[0];
};

assertEqual(head(2), 2);