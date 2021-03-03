function removeElement(arr, elem){
    return arr.filter(element => element !== elem)
}

var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]