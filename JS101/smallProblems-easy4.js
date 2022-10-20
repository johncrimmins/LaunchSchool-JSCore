// use readlineSync.prompt to ask for length and width of room in meters, then log area of room to
// console in both square meters and square feet

let rlSync = require('readline-sync');

function calcBill () {
  let bill = parseInt(rlSync.question("What is the bill?\n"));
  let tipPercentage = parseInt(rlSync.question("What is the tip percentage?\n"));

  let tip = bill * (tipPercentage / 100);
  let total = (tip + bill).toFixed(2);
  console.log(`The tip is ${tip} and the total is $${total}.`)
}

calcBill();