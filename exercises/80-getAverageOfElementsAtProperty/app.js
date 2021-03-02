function getAverageOfElementsAtProperty (obj, key){
    
    // Array.isArray evaluates if the value is an array 
    if(Array.isArray(obj[key])){

        // evaluates if passed property exist inside the object
        if(obj.hasOwnProperty(key)){
            let arrayLength = obj[key].length;

            if(arrayLength > 0){
                let total = 0;     

                obj[key].forEach(element => total += element);

                return total / arrayLength;
            }
        }
    }
    return 0;
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2