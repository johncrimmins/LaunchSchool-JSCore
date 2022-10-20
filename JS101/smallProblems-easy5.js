// use readlineSync.prompt to ask for length and width of room in meters, then log area of room to
// console in both square meters and square feet

let rlSync = require('readline-sync');

function calcSumOrProduct () {
  let num = parseInt(rlSync.question("Please enter an integer greater than 0:"));
  let choice = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product.`);

  let result = 0;

  if (choice === 's') {
    for (let i = 1; i <= num; i++) {
      result += i;
    }
    console.log(`The sum of the integers between 1 and ${num} is ${result}.`)
  } else if (choice === 'p') {
    result = result +1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    console.log(`The product of the integers between 1 and ${num} is ${result}.`)
  }
  
}

calcSumOrProduct();