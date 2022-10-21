// convert a number to a string

const DIGITS = ['0','1','2','3','4','5','6','7','8','9']

function integerToString ( num ) {
  let result = "";

  do {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[lastDigit] + result;
  } while (num > 0)

return result;

}

console.log(typeof(integerToString(4321)));
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(1234567890));