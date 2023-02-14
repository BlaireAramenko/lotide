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

const findKeyByValue = function(obj, val) {
  let objKeys = Object.keys(obj);
  let index = 0;
  for (let element in obj) {
    if (obj[element] === val) {
      return objKeys[index];
    }
    index++;
  }
  return undefined;
}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//   assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//   assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

module.exports = findKeyByValue;

*/

//instructor answer


const findKeyByValue = function(obj, value) {

  const keys = Object.keys(obj);

  for (const key of keys) {

    if (obj[key] === value) {
      return key;
    }
  


  }

};

let result = findKeyByValue({a: 1, b: 2, c: 3, d: 4}, 3);

console.log(result);