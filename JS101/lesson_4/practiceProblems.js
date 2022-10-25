// // 8. add up all ages from munster family object

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// // // one way

// // function sumAges (object) {
// //   let result = 0;

// //   for (key in object) {
// //     result += object[key];
// //   }
// //   return result;
// // }

// // // another way

// // console.log(Object.values(ages).reduce((accumulator, age) => {
// //   return accumulator = accumulator + age;
// // },0));

// // // yet another way
// // let totalAges = 0;
// // console.log(Object.values(ages).forEach(age => totalAges += age))
// // console.log(totalAges);

// // // console.log(sumAges(ages));

// // pick min age from munsters
// console.log(Object.values(ages));
// console.log(Math.min(...Object.values(ages)));


// // create an object that expresses the frequency with which leach letter occurs in this string

// let obj  = {};

// let statement = "The Flintstones Rock";
// let lettersList = [];

// statement.split("").forEach(letter => {

//   if (letter === " ") {
//     return;
//   }

//   if (lettersList.includes(letter)) {
//     // increment by 1
//     obj[letter] = obj[letter] + 1;
//   } else {
//     // add new letter
//     lettersList.push(letter);
//     obj[letter] = 1;
//   }
// });

// let result = ['a', 'b', 'c'].forEach(function(item) {
//   console.log(item);
// });

// result; // []

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// scores.sort((a, b) => {

//   console.log("a: ", a)
//   console.log("b: ", b)
  
//   // let totalAScore = a.reduce((number, next) => {
//   //   console.log(number, next)
//   //   return number + next;

//   // });
//   // let totalBScore = b.reduce((number, next) => {
//   //   console.log(number, next)
//   //   return number + next;
//   // });
//   // return totalAScore - totalBScore;
// });

// let scores = [3,2,1];

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

// console.log(scores.sort( (a, b) => {
//   let totalAScore = a.reduce((number, next) => number + next);
//   let totalBScore = b.reduce((number, next) => number + next);

//   return totalAScore - totalBScore;
// }))