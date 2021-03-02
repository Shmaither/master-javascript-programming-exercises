function isEvenLength(w1) {
  if(w1.length % 2 === 0){
      return true;
  }
  return false;
}

var output = isEvenLength('wow');
console.log(output); // --> false