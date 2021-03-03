function getNthElementOfProperty(obj, key, index){
    return obj[key][index];
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2