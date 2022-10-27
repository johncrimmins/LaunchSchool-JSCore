// a function that rotates an array by movingn the first element to the end of the array
// does NOT modigy the original array

// if the input is not an array, return undefined
// if the input is an empty array, return an empty array

// test cases


// handle edge cases 
// store the first element of array in a variable first
// store the last element of the array in a variable last
// create an array with last, ...array, first
// remove the elements whose index is 1 and n - 2 (as those are our original first and last)
// return array

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined
  } 

  if (array.length === 0) {
    return [];
  }

  console.log(array)

  let first = array[0];
  let last = array[array.length - 1];

  let result = [...array];

  result[0] = last;
  result[result.length - 1] = first;

  console.log(array)

  return result;
}

console.log(rotateArray([7,3,5,2,9,1]));