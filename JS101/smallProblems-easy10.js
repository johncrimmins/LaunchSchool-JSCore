
// function that computes the sum of all numbers between 1 and num, inclusive, that are multiples of 3 or 5

function utf16Value(string) {
  let splitString = string.split("");


  let result = 0;

  splitString.forEach( letter => {
    result += letter.charCodeAt(0);
  })
console.log(result)
  return result;
}

utf16Value('Four score');
utf16Value('Launch School');
utf16Value('a');
utf16Value('');

const OMEGA = "\u03A9";
utf16Value(OMEGA);
utf16Value(OMEGA + OMEGA + OMEGA);