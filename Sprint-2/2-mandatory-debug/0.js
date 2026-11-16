// Predict and explain first...

// I predict that the multiplication will print 320 first, but the final message will show undefined because the
// function does not return a value.
 

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// Explanation  

// The function prints the result but doesn't return it. That's why the final message shows undefined instead of 320.
// Finally, correct the code to fix the problem


function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


// Out put The result of multiplying 10 and 32 is 320
