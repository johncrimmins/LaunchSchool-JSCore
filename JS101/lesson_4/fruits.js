// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceKeyValues = Object.entries(produce);
// let onlyVegetablesArr = produceKeyValues.filter(keyValue => {
//   let [key, value] = keyValue;
//   return value === 'Vegetable';
// });


// let onlyVegetables = {};

// onlyVegetablesArr.forEach(keyValue => {
//   let [key, value] = keyValue;
//   onlyVegetables[key] = value;
// })


// let arr = [2, 4, 6]
// arr[-3] = 5;
// arr['foo'] = 'a';
// console.log(arr);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
// console.log(arr.length);       // 3
// console.log(Object.values(arr))  // [ '0', '1', '2', '-3', 'foo' ]
// arr.map(x => x + 1);           // [ 3, 5, 7 ]

// console.log([1, 2, 3].map(num => {
//   num * num;
// }));

// let flintstones = ["Fred", "Barney", "Wilma"];
// let newObj = {};

// // uses this array to create an object where the names are the keys and values are the positions in the array 
// function defineObj (array) {
//   array.forEach( item => {
//     newObj[item] = array.indexOf(item);
//   })  
// }

// defineObj(flintstones);
// console.log(newObj);


// let myObj = {
//   prop1: "abc",
//   prop2: "def",
//   prop3: "ghi"
// }

// let array = Object.entries(myObj);
// console.log(array)

// let newObj = {};

// array.forEach( keyValue => {
//   let [key, value] = keyValue;
//   newObj[key] = value;
// })

// console.log(newObj);

// function selectFruit (object) {
//   // iterate through object and select only items whose value is Fruit

//   let result = {};

//   for (key in object) {
//     if (object[key] === 'Fruit') {
//       result[key] = object[key]
//     }
//   }

//   return result;
// }

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

