const eqArrays = require('../eqArrays');

const assertEqual = require('../assertEqual');

// TEST CODE
const a1 = [1, 2, 3];
const a2 = [1, 2, 3, 4];
const a3 = [1, 2 , 3];

console.log(eqArrays(a1, a3)); //true
console.log(eqArrays(a1, a2)); 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 