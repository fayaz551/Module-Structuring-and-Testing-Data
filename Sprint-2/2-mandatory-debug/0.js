// Predict and explain first...

// =============> write your prediction here
// An error will occur because the function 'multiply' does not return any value. When we try to use the result of 'multiply(10, 32)' in the template literal, it will be 'undefined', which is not the expected output. To fix this, we need to add a return statement in the 'multiply' function to return the product of 'a' and 'b'.

/* function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
// The error is occurring because the 'multiply' function does not return any value. When we call 'multiply(10, 32)', it executes the console.log statement inside the function, which prints the product of 'a' and 'b' to the console. However, since there is no return statement, the function returns 'undefined' by default. When we try to use this 'undefined' value in the template literal, it does not give us the expected output. To fix this issue, we need to add a return statement in the 'multiply' function to return the product of 'a' and 'b'.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);