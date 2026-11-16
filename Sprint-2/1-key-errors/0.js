// Predict and explain first...
// I predict that the function will produce an error because the variable 'str' is declared twice using let in the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// SyntaxError: Identifier 'str' has already been declared
// The error occurs because 'str' is already declared as a function parameter. Declaring another variable with the same name using


function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}