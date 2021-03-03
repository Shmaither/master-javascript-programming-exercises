function keep(arr, element){
    return arr.filter(elem => elem === element);
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]