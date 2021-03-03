function getElementsGreaterThan10AtProperty(obj, key){
    let newArray = (obj[key]).filter(elem => elem > 10);
    return newArray;
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]