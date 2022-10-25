// fucntion that will take a line of text and write it to console as a box

function logInBox(string) {
  let result = `+--+
|  |
|  |
|  |
+--+`;
   
  for (let i = 0; i < string.length; i++) {
    // add dashes to top
    result = result.slice(0, 1) + "-" + result.slice(1);
    // add dashes to bottom 
    result = result.slice(0, -1) + "-" + result.slice(-1);
  }



  console.log(result);
}

logInBox("word")