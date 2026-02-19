/*const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
*/

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// The code above won't work because cardNumber is a number, and the slice method is a string method. The slice method cannot be used on a number, which will result in a TypeError. To fix this error, we can convert cardNumber to a string before using the slice method. For example:


const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits); 