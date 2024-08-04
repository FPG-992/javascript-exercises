const add = function(number1,number2) {
  let sum = 0;
  sum = number1 + number2;
  return sum;
}

const subtract = function(number1,number2) {
  let sum = 0;
  sum = number1 - number2;
  return sum;
};

const sum = function(array) {
  let sum=0;
	for (let i =0; i<array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multiplyResult = 1;
  for (let i =0; i<array.length; i++){
    multiplyResult *= array[i];
  }
  return multiplyResult;
};

const power = function(number1,number2){
  return number1**number2;
}

const factorial = function(num) {
  product = 1;
  for (let i =num; i>0; i--){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
