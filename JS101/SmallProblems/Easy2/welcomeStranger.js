// function takes 2 args, array and object
// array will contain 2 or more elements that, when combined w/ spaces, produces a name
// obj will contain 2 keys: title and occupation, and their values
// return a greeting that uses the person's full name and mentions their title

// example:

function greetings(array, object) {

  result = `Welcome ${array.join(" ")}, ${object.title} ${object.occupation}!`;


  return result;
}
console.log(
  greetings(["John","Q","Doe"], {title: "Master", occupation: "Plumber"})
);
