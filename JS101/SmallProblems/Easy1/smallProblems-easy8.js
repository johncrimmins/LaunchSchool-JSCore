// write function that takes two strings as args, determines lengths of strings, then concatenates the shorter string, longer string, and shorter string and returns the result


function isLeapYear ( year ) {

  if (year >= 1752) {
  // is divisible by 4? 
    if (year % 4 === 0) {
      // if yes, is it divisible by 100? 
      if (year % 100 === 0) {
        // if yes, is it divisible by 400?
        if (year % 400 === 0) {
          //if yes, it's a leap year
          console.log(true)
          // if no, it is not a leap year
        } else {
          console.log(false)
        }
        
        // if no, it is a leap year  
      } else {
        console.log(true)
      }
      // if no, it is not a leap year
    } else {
      console.log(false)
    }
  } else if (year < 1752) {
    if (year % 4 === 0) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
  // if yes -> is divisible by 100? 
    // if yes -> is it divisible by 400?
      // if yes -> it is a leap year
      // if no -> it is not a leap year
    // if no -> is a leap year 
  // if no -> not a leap year
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(1));
console.log(isLeapYear(1700));
console.log(isLeapYear(1752));