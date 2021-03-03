function getElementsLessThan100AtProperty(obj, key){
    let newArray = (obj[key]).filter(elem => elem < 100);
    return newArray;
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]

