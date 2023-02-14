const assertArraysEqual = require('./assertArraysEqual');

const assertEqual = function(array1, array2) {

  if (array1 !== array2) {
    console.log(`💔 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`💕 Assertion Passed: ${array1} === ${array2}`);
  }

};

const head = function(array) {

  return array[0];
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for(let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]){
      return false;

    }

  }

  return true;
  
};

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);

const letterPositions = function(sentence) {
  const results = {};
    for (let i = 0; i < sentence.length; i++) {
      let letter = sentence[i];
      if (letter === ' ') {
        continue;
      } else if (!results[letter]) {
        results[letter] = [i];
    
      } else {
        results[letter].push(i);
      }
      
    } return results;
  };
console.log(letterPositions('I am Web Developer'))
//console.log(countLetters('I am Web Developer'));

assertArraysEqual(letterPositions("hello").e, [1]);

