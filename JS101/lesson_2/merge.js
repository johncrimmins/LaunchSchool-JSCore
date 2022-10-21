// function that takes two arrays of nums and returns result of merging arrays

function merge( array1, array2) {
  let result = [];
  let counter = 0;

  while (counter < array1.length + array2.length) {
    if (array1[counter]) {
      result.push(array1[counter]);
    }
    if (array2[counter]) {
      result.push(array2[counter]);
    }
    counter++;
  }
  return result;
}

console.log(merge([1,2,3],[4,5,6,8,9]));