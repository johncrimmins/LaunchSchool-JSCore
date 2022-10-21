// use readlineSync.prompt to ask for length and width of room in meters, then log area of room to
// console in both square meters and square feet

let rlSync = require('readline-sync');

function calcRoom () {
  let width = rlSync.question("Enter the width of the room in meters:\n");
  let length = rlSync.question("Enter the length of the room in meters:\n");

  let areaMeters = width * length;
  let areaFt = ((width * 3.28084) * (length * 3.28084)).toFixed(2);
  console.log(`The area of the room is ${areaMeters} square meters (${areaFt} square feet).`)
}

calcRoom();