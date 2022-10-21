// 2.

let start = 0
let end = 99

function logEvens(start, end) {

  let actualStart = Infinity;

  if (start % 2 === 1) {
    actualStart = start + 1;
  } else {
    actualStart = start;
  }

  for (i = actualStart; i <= end; i += 2) {
    console.log(i)
  }
}

logEvens(start,end)