function f( object ) {
  console.log(object);
  object = {not: "here"};
  console.log(object);
}
let objA = {hi: "there"}
f(objA);
console.log(objA);