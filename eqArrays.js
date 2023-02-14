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

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

*/

// instructor answer 

const eqArrays = function(array1, array2) {

  if(array1.length !== array2.length) {
    return false;
  }

  for(let i = 0; i < array1.length; i++) {

    if(array1[i] !== array2[i]){
      return false;

    }

  }

  return true;
  
};
const a1 = [1, 2, 3];
const a2 = [1, 2, 3, 4];
const a3 = [1, 2 , 3];

console.log(eqArrays(a1, a3)); //true
console.log(eqArrays(a1, a2)); 