const assertEqual = function(array1, array2) {

  if (array1 !== array2) {
    console.log(`💔 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`💕 Assertion Passed: ${array1} === ${array2}`);
  }

};

module.exports = assertEqual;
