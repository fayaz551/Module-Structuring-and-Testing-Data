// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

/*console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
*/


// The error in this code is that we are trying to use the variable cityOfBirth before it has been declared and assigned a value. In JavaScript, variables declared with const (or let) are not hoisted, which means they cannot be accessed before their declaration. To fix this error, we need to declare and assign a value to cityOfBirth before using it in the console.log statement. For example:

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);