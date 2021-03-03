function getLastElementOfProperty(obj, key) {
    let array = obj[key];
    let arrayLength = array.length;
    if (Array.isArray(array)) {
        if (arrayLength > 0) {
            return array[arrayLength-1];
        }
    } 
    return undefined;
}

var obj = {
    key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5