
// Predict and explain first BEFORE you run any code...
 
// I predict that a SyntaxError will occur because we cannot use a number (3) as a function parameter. A parameter must be a
// valid variable name.


// this function should square any number but instead we're going to get an error

 

// function square(3) {
//     return num * num;
// }

//   SyntaxError: Unexpected number

// The error occurs because 3 is used as a function parameter instead of a variable name. JavaScript expects a valid 
// Parameter name, such as num. Also, the function uses num without declaring it as a parameter.
 

// Finally, correct the code to fix the problem
 

function square(num) {
    return num * num;
}

console.log(square(3));



// Output 9
