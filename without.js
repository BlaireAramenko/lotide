// edited code based on instructor's answer

const without = function(source, itemsToRemove) {
const results = [];

for (const item of source) {
  if(itemsToRemove.includes(item)){
  results.push(item);
  }
}


return results;
};

let results = without([1, 2, 3, 4], [2, 4]);
console.log(results); // [1, 3]