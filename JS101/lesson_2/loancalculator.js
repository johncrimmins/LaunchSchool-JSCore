let rlsync = require('readline-sync')

// welcome the user
// ask for the loan amount
// ask for the apr
// ask for the loan duration

// calculate monthly interest rate
// calculate loan duration in months

// print the monthly payment amount as dollar and cents 


// future features: input validation

let amount = 0;
let apr = 0;
let durationInYears = 0;
let durationInMonths = 0;

function greetUser() {
  console.log("Hello! Welcome to John's Loan Calculator.")
}

function getInputs () {
  amount = rlsync.question("How much is the loan amount?\n");
  apr = rlsync.question("How much is the APR? Enter the number, not the decimal.\n");
  durationInYears = rlsync.question("How long is the duration of the long in years?\n");

  return [amount, apr, durationInYears];
}

function calcPayment (amount, apr, durationInYears) {
  let durationInMonths = durationInYears * 12;
  let monthlyIntRate = apr / 12 / 100;

  let payment = amount * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-durationInMonths))));
  return payment;
}

greetUser();
[amount, apr, durationInYears] = getInputs();
calcPayment(parseFloat(amount), parseFloat(apr), parseFloat(durationInYears));