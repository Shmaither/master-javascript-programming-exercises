function isEvenAndGreaterThanTen(w1) {
  if(w1.length % 2 === 0 && w1.length > 10){
      return true;
  }
  return false;
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false