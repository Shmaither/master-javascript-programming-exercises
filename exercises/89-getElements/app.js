function getElementsThatEqual10AtProperty(obj, key){
    let newArray = (obj[key]).filter(elem => elem === 10);
    return newArray;
}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]