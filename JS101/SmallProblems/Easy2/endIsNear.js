// function that returns the next to last word in the string passed to it as an argument
// assume string will contain at least 2 words

function penultimate (string) {
  let result = string.split(" ");
  return result[result.length - 2]
}

console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!") === "is");