let boo = "gar";
let abc = 123;

function setBoo() {
  boo = "xyz";
  abc = 359;
  console.log(abc)
}

console.log(boo);
console.log(abc);
setBoo();
console.log(boo);
console.log(abc);