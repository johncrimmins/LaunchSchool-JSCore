// 1. ASCII Art

// let string = "The Flintstones Rock!";

// for (let i = 0; i < 10; i++) {
//   console.log(string);
//   string = " " + string;
// }

// // Alternative

// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flintstones rock!");
// }

// // 2.

// let munstersDescription = "The munsters are creepy and spooky.";

// console.log(munstersDescription.split("").map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join(""))



// TEST

// let myArray = [1,2,3];

// function testFunction ( myArray ) {
//   myArray = [3,4,5];
// }

// testFunction(myArray);
// console.log(myArray)


// function messWithVars(one, two, three) {
//   one.splice(0,1,"two");
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// // 4.
// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       break;
//     }
//   }

//   return true;
// }