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

const countLetters = function(str) {
  let counter = {};

  for (let value of str) {
    if (value === ' ') {
      continue;
    } else {
      counter[value] = (counter[value] || 0) + 1;
    }
  }
  return counter;
};
countLetters("Hello World");
console.log(countLetters("Hello World"));