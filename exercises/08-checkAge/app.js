function checkAge(name, age) {
    let str = "";
  if(age >= 21){
      str = `Welcome, ${name}!`;;
      return str;
  }else{
      str = `Go home, ${name}!`;
    return str;
  }
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'