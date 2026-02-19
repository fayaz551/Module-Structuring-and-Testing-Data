let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 4 function calls in this file. The lines where a function call is made are:
// Line 1: carPrice.replaceAll(",", "")
// Line 2: priceAfterOneYear.replaceAll(",", "")
// Line 3: Number(carPrice.replaceAll(",", ""))
// Line 4: Number(priceAfterOneYear.replaceAll(",", ""))

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is occurring on 4 where we are trying to convert the string values of carPrice and priceAfterOneYear to numbers using the Number function. The error is occurring because the replaceAll method is being called on a string that has not been updated with the new value after the first replaceAll call. To fix this problem, we can update the carPrice and priceAfterOneYear variables with the new values after the replaceAll calls. For example:

// c) Identify all the lines that are variable reassignment statements
// Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 7: const priceDifference = carPrice - priceAfterOneYear;
// Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",","")) is first calling the replaceAll method on the carPrice string to remove all commas from the string. This is necessary because the presence of commas in a number string can cause issues when trying to convert it to a number. After the commas are removed, the resulting string is passed to the Number function, which converts the string into a numeric value. The purpose of this expression is to convert the carPrice string, which may contain commas, into a number that can be used for calculations.