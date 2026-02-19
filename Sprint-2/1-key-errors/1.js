// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// An error will occur because we are trying to declare a variable with the same name as a function parameter. In this case, we are declaring 'decimalNumber' inside the function, which conflicts with the parameter 'decimalNumber'. This will result in a SyntaxError because we cannot have two variables with the same name in the same scope.

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> write your explanation here
// The error is occurring because we are trying to declare a variable with the same name as a function parameter. In this case, we are declaring 'decimalNumber' inside the function, which conflicts with the parameter 'decimalNumber'. This will result in a SyntaxError because we cannot have two variables with the same name in the same scope.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`; 
  return percentage;
}
