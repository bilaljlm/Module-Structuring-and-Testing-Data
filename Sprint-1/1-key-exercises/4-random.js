const minimum = 1;
const maximum = 100;


const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// const num = Math.random() * (maximum - minimum + 1) + minimum;
// const num = (maximum - minimum + 1) + minimum;
// const num = Math.random()


// In this exercise, you will need to work out what num represents?
// Ans: num represents a random whole number between 1 and 100.

// Try breaking down the expression and using documentation to explain what it means
// Ans:  Math.random() generates a random decimal, Math.floor() rounds it down, and the other calculations set the range.


// It will help to think about the order in which expressions are evaluated
// Ans: First, JavaScript calculates the range, then generates a random number, multiplies it, rounds it down, and adds the minimum value.

// Try logging the value of num and running the program several times to build an idea of what the program is doing

 
// Output: Each time I run the program, it can generate a different random whole number between 1 and 100.
