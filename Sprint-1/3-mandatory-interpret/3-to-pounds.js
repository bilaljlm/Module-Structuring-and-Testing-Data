const penceString = "399p";
// 1. const penceString = "399p": initialises a string variable with the value "399p".


const penceStringWithoutTrailingP = penceString.substring (0, penceString.length - 1);

//console.log(penceStringWithoutTrailingP);
 
// 2. Removes the last character "p" from the string. The result is "399".

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//console.log(paddedPenceNumberString);
// 3. Makes sure the string has at least 3 characters by adding zeros at the beginning if needed. The result is "399".


const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// 4. Takes all characters except the last two. This gives us the pounds value "3".


const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
// 5. Gets the last two characters as pence. padEnd() makes sure there are always two characters.


console.log(`£${pounds}.${pence}`);
// 6. Displays the final price by combining pounds and pence. The output is £3.99.



// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds
 
