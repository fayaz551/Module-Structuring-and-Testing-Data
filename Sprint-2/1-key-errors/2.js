
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// An error will occur because the function is defined with an invalid parameter name '3'. In JavaScript, parameter names must be valid identifiers, which cannot start with a number. This will result in a SyntaxError when the code is parsed.

/* function square(3) {
    return num * num;
}
    */

// =============> write the error message here
// SyntaxError: Unexpected number '3'. Parameter names must be valid identifiers and cannot start with a number.

// =============> explain this error message here
// The error message indicates that the number '3' is unexpected in the context of a parameter name. In JavaScript, parameter names must be valid identifiers, which means they cannot start with a number. To fix this error, we need to change the parameter name to a valid identifier, such as 'num'.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(5)); 


