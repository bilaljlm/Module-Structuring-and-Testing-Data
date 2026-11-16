// Predict and explain first...

//  I predict that an error will occur because 'decimalNumber' is already declared as a function parameter. It is declared
//  again using const inside the function.

 


// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);


// Error:  yntaxError: Identifier 'decimalNumber' has already been declared


// Explanation  

// The error occurs because decimalNumber is already declared as a function parameter and is declared again using const inside the
// same function. This causes a SyntaxError.

// Also, decimalNumber is only accessible inside the function. Trying to access it outside the function using console.log()
// causes a ReferenceError.



// Finally, correct the code to fix the problem


function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
 
