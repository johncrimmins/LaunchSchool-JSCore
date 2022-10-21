

function xor(arg1, arg2) {
  
  let count = 0;

  if (arg1) {
    count += 1;
  }

  if (arg2) {
    count += 1;
  }

  if (count === 1) {
    return true;
  } else {
    return false;
  }
}


console.log(xor(5,0) === true);
console.log(xor(false, true) === true);
console.log(xor(1,1) === false);
console.log(xor(true,true) === false);