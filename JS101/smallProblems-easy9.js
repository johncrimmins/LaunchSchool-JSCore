
// function that computes the sum of all numbers between 1 and num, inclusive, that are multiples of 3 or 5

function multisum(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result = result + i
    }

  }
  console.log(result);
  return result;

}

multisum(3);
multisum(5);
multisum(10);
multisum(1000);