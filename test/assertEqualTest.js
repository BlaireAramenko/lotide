// assertEqual.js

let assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
};

let assertEqual = require('../assertEqual');

module.exports = assertEqual;