function isSameLength(w1, w2) {
  if(w1.length === w2.length){
      return true;
  }
  return false;
}

var output = isSameLength('words', 'super');
console.log(output); // --> true