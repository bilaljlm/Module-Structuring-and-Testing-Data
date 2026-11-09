let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // Number(carPrice.replaceAll(",", ""))
    // carPrice.replaceAll(",", "")
    // Number(priceAfterOneYear.replaceAll(",", ""))
    // priceAfterOneYear.replaceAll(",", "")
    // console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // The error is on line 5 because there is a missing comma between "," and "" inside replaceAll().
    // We can fix it by adding the missing comma.

// c) Identify all the lines that are variable reassignment statements
    //  carPrice = Number(carPrice.replaceAll(",", ""));
    //  priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
    //  These lines update the existing variable values.

// d) Identify all the lines that are variable declarations
    // let carPrice = "10,000";
    // let priceAfterOneYear = "8,543";
    // const priceDifference = carPrice - priceAfterOneYear;
    // const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // First, replaceAll() removes all commas from the price string.
    // Then Number() converts the resulting string into a number.
    // For example, "10,000" becomes "10000".
    // This allows us to perform mathematical calculations with the price.