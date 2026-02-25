// Predict and explain first...
//  =============> write your prediction here
// An error will occur because the 'sum' function does not return any value. When we try to use the result of 'sum(10, 32)' in the template literal, it will be 'undefined', which is not the expected output. To fix this, we need to add a return statement in the 'sum' function to return the sum of 'a' and 'b'.

/* function sum(a, b) {
  return;
  a + b;
}
  

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here
// The error is occurring because the 'sum' function does not return any value. When we call 'sum(10, 32)', it executes the return statement without any value, which means the function returns 'undefined' by default. When we try to use this 'undefined' value in the template literal, it does not give us the expected output. To fix this issue, we need to change the return statement to return the sum of 'a' and 'b', like this: 'return a + b;'.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);