/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }

};

let array = [];
const head = function(array) {

  return array[0];
};
*/


//instructor answer
let assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
};

module.exports = assertEqual;
