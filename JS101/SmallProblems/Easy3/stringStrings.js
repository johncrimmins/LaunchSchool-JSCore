// function that takes one positive integer and returns a strings of alternating 1's and 0's, starting with 1
// length of string should match given integer

function stringy(num) {
  let result = "";
  result = result.concat("1");

  for (let i = 1; i < num; i++) {
    if (result[i-1] === "1") {
      result = result.concat("0");
    } else if (result[i-1] === "0") {
      result = result.concat("1");
    }
  }

  return result;
}

console.log(stringy(1));