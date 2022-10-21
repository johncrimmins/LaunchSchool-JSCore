let readline = require('readline-sync');

console.log("What is your name?");
let response = readline.question();

if (response.includes("!")) {

  console.log(`HELLO ${response.toUpperCase().slice(0, response.length - 1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello, ${response}`);
}
