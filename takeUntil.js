const takeUntil = function(array, callback) {
const results = [];

for (const item of array) {
  
  if (callback(item)) {
    return results;
  }

  
  results.push(item);
}

return results; 
};

let result = takeUntil([1, 2, 3, 4 , 5], x => x > 2);
console.log(result); 