// function that returns an array containing every other element of an array passed as arg
// values should be 1st 3rd etc elements

function oddities (array) {
  let result = [];

  for (let i = 0; i < array.length; i += 2) {
    result.push(array[i])
  }

  return result;
}

console.log(oddities([2,3,4,5,6])); 
console.log(oddities([1,2,3,4,5,6])); 
console.log(oddities(["abc","def"])); 
console.log(oddities([123])); 
console.log(oddities([])); 
