function getAllElementsButNth (arr, num){
    return arr.filter((elem, index) => index !== num)
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']