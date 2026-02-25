// Predict and explain first...
// 

// Predict the output of the following code:
// =============> Write your prediction here
// The output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> write the output here
// The output is:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The output is the way it is because the 'getLastDigit' function is not using the input parameter to calculate the last digit. Instead, it is always converting the global variable 'num' (which is set to 103) to a string and slicing the last character, which results in '3'. To fix this issue, we need to modify the 'getLastDigit' function to accept a parameter and use that parameter instead of the global variable 'num'. For example:
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(number) {
  return number.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
