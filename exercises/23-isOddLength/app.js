function isOddLength(w1) {
  if(w1.length % 2 !== 0){
      return true;
  }
  return false;
}

var output = isOddLength('special');
console.log(output); // --> true