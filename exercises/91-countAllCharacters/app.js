function countAllCharacters(str){
    let obj = {};

    if(str.length > 0){
        str.split('').forEach(element => {
            if(obj.hasOwnProperty(element)){
                obj[element] += 1;
            }else{
                obj[element] = 1;
            }
        });
        return obj;
    }else{
        return str;
    }
    
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}