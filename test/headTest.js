let array = [];
const head = function(array) {

  return array[0];
};

assertEqual(head(2), 2);

let head = require('../head');

module.exports = head;