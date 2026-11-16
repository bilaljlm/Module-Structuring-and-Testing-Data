// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// I predict all three lines will show 3 because the function always uses the global variable num (103).

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here

// The function doesn't accept a parameter, so it always uses
// the global variable num, which is 103.


// Finally, correct the code to fix the problem
// =============> write your new code here


 
function getLastDigit(number) {
  return number.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Final Output
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6