function addToBackOfNew (arr, num){
    let newArr = arr.map(elem => elem);
    newArr.push(num);
    return newArr;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]