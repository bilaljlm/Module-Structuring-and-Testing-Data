// Predict and explain first...
//  =============> write your prediction here

// I predict the result will be undefined because return stops the function.

// function sum(a, b) {
//   return;
//   a + b;
// }
// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// output: The sum of 10 and 32 is undefined

// =============> write your explanation here

// The return statement is on a separate line, so the function
// stops before calculating a + b.


// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Output: The sum of 10 and 32 is 42