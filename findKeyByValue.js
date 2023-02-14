//adjusted answer based on instructor Gary's answer


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