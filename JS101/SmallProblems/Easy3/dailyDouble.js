// function that takes a string argument and returns a new string that contains the value
// of the original string with all consecutive duplicate characters collapsed into a single character

// ex: crunch('ddaaiillyy ddoouubbllee') -> "daily double"

function crunch ( string ) {
  let oldString = string.split("");
  let newString = [oldString[0]];

  for (let i = 0; i < oldString.length; i++) {
    let currentElement = oldString[i];
    let nextElement = oldString[i+1];

    console.log("current: ", currentElement, "next: ", nextElement)

    if (currentElement === nextElement) {
    } else if (currentElement !== nextElement && nextElement !== undefined) {
      newString.push(nextElement)
    }
  }

  return newString.join("");
}

let word = "4444abcabccba";

console.log(crunch(word));