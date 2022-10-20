// 1. Function takes one integer argument, may be pos neg or zero. Method returns true if number's abs value is odd. Assume arg is valid int value.

function isItOdd(num) {
  return (num % 2 === 1 || num % 2 === -1)
}

console.log(isItOdd(1));
console.log(isItOdd(-2));
console.log(isItOdd(-5));
console.log(isItOdd(10));
console.log(isItOdd(-101));