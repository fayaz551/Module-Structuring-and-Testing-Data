// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(kilograms) {
    return +(kilograms * 2.20462).toFixed(1);
}
console.log(toPounds(1)); // should return 2.2
console.log(toPounds(5)); // should return 11
console.log(toPounds(10)); // should return 22
