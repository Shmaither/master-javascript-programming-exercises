function getOddLengthWordsAtProperty(obj, key){
    let array = obj[key];
    let arrayLength = array.length;
    if (Array.isArray(array)) {
        if (arrayLength > 0) {
            return array.filter(element => element % 2 !== 0);
        }
    } 
    return array;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
