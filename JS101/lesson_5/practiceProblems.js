// // // // order the array of number strings by desceding numeric value (largest number value to smallest) 

// // // let arr = ['10', '11', '9', '7', '8']

// // // console.log(arr.sort( (a,b) => {
// // //   return Number(b) - Number(a);
// // // }))


// // // order the array of objects based on year of publication of each book, from earliest to latest

// // // let books = [
// // //   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
// // //   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
// // //   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
// // //   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
// // //   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// // // ];

// // // console.log(books.sort( (a, b) => {
// // //   return Number(a["published"]) - Number(b["published"]); 
// // // }));

// // // access the letter g for each
// // // let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

// // // let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// // // let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// // // let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// // // let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

// // // console.log(arr1[2][1][3])
// // // console.log(arr2[1]["third"][0])
// // // console.log(arr3[2]["third"][0][0])
// // // console.log(obj1.b[1])
// // // console.log(Object.keys(obj2.third)[0])

// // // let munsters = {
// // //   Herman: { age: 32, gender: 'male' },
// // //   Lily: { age: 30, gender: 'female' },
// // //   Grandpa: { age: 402, gender: 'male' },
// // //   Eddie: { age: 10, gender: 'male' },
// // //   Marilyn: { age: 23, gender: 'female'}
// // // };

// // // // compute and total ages of the male members of the family
// // // // let totalMaleAge = 0;

// // // // for (let member in munsters) {
// // // //   if (munsters[member]['gender'] === 'male') {
// // // //     totalMaleAge += munsters[member].age;
// // // //   }
// // // // }

// // // // console.log(totalMaleAge); // => 444

// // // for (let member in munsters) {
// // //   console.log(`${member} is a ${munsters[member].age}-year-old ${munsters[member].gender}`)
// // // } 

// // let obj = {
// //   first: ['the', 'quick'],
// //   second: ['brown', 'fox'],
// //   third: ['jumped'],
// //   fourth: ['over', 'the', 'lazy', 'dog'],
// // };

// // let vowels = 'aeiou';

// // Object.values(obj).forEach(arr => {
// //   arr.forEach(word => {
// //     word.split('').forEach(char => {
// //       if (vowels.includes(char)) {
// //         console.log(char);
// //       }
// //     });
// //   });
// // });

// // // e
// // // u
// // // i
// // // o
// // // o
// // // u
// // // e
// // // o
// // // e
// // // e
// // // a
// // // o

// // let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// // console.log(arr.map( subArray => {
// //   if (typeof(subArray[0]) === 'number') {
// //     // we have a number
// //     return subArray.sort((a,b) => a - b)
// //   } else if (typeof(subArray[0]) === 'string') {
// //     // we have a string
// //     return subArray.slice().sort();
// //   }
// // }));


// // let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// // let newArray = arr.map(subArray => {
// //   let incrementedObj = {};

// //   for (let key in subArray) {
// //     incrementedObj[key] = subArray[key] + 1;  
// //   }

// //   return incrementedObj;
// // })

// // console.log(arr, newArray)


// // find fibonacci number by length 

// // write a function that calculates and returns the index of the first fibonacci number that has the number of digits specified by the argument
// // first fib has index of 1 

// // input always int > 2

// // function that finds fibonacci number by length and then returns the index of that number

// // examples

// // fibonacci(2) = 7
// // fibonacci(3) = ?

// // data structure: number

// // algorithm:

// // store the number of digits the length of the result should be, length
// // set an index variable
// // while (answer.length < length)
// //  check length, break if found
// //  calculate answer, the next fibonacci
// //  increment index 

// // return the index  


// function fibonacci(length) { 
//   // store the number of digits the length of the result should be, length
//   // set an index variable
//   let index = 1;
//   let answer = [1,1];


//   console.log("`${answer[index]}`.length: ", `${result}`.length, "length: ", length)
//   // while (answer.length < length)
//   while (`${result}}`.length  < length) {
//     //  check length, break if found
//     if (`${answer}`.length === length) {
//       break;
//     } 
//     console.log("loop entered")

//     //  calculate answer, the next fibonacci
//     answer = answer[index - 1] + answer[index - 2];
//     result = fib1 + fib2;
//     fib2 = fib1;
//     fib1 = result;

//     //  increment index 
//     index += 1;
//   }

//   // return the index  
//   return index + 1
//   }

// console.log(fibonacci(2))


// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// // return new array with same structure but containing only th e numbers that are multiples of 3

// let newArray = arr.map(array => {
//   return array.filter(num => {
//     if (num % 3 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   })
// })


// console.log(newArray)
// console.log(newArray2)

// given the following data structure, sort the array 
// so that the sub arrays are ordered based on the sum of the odd numbers they contain 

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// console.log(arr.sort((a, b) => {
//   let sumA = a.reduce((accumulator, element) => {
//     debugger;
//     if (element % 2 === 1) {
//       return accumulator = accumulator + element;
//       console.log("It accumulated for odd: ", accumulator)
//     } else {
//       return accumulator = accumulator;
//       console.log("It accumulated for even: ", accumulator)
//     }
//   })

//   let sumB = b.reduce((accumulator, element) => {
//     if (element % 2 === 1) {
//       return accumulator = accumulator + element;
//     } else {
//       return accumulator = accumulator;
//     }
//   })

//   return sumA - sumB;

// }))

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let arr = [];

// for (let key in obj) {
//   debugger;
//   if (obj[key].type === 'fruit') {
//     arr.push(obj[key]["colors"].map(element => {
//       return element[0].toUpperCase() + element.slice(1);
//     }));
//   } else if (obj[key].type === "vegetable") {
//     arr.push(obj[key]["size"].toUpperCase());
//   }
// }

// console.log(arr);


// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// // return array which contains only the objects where all nums even

// console.log(arr.filter(obj => {
//   return Object.values(obj).every(array => {
//     return array.every(element => element % 2 === 0);
//   })
// }));

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let obj = {};

arr.forEach(array => {
  obj[array[0]] = array[1]
})

console.log(obj)