const findKey = function(obj, callback) {

  const keys = Object.keys(obj)

  for(const key of keys){
    const item = obj[key];

    const result = callback(item);

    if (result) {
      return key;
    }

  }

};

const result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2)


console.log(result);