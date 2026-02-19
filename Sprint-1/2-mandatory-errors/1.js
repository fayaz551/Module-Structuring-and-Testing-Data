// trying to create an age variable and then reassign the value by 1

/* const age = 33;
age = age + 1;
*/
// This code will throw an error because we are trying to reassign a value to a constant variable (age). In JavaScript, once a variable is declared with const, its value cannot be changed. To fix this error, we can either change the declaration to let or var, which allows for reassignment, or we can create a new variable to store the updated age. For example:

let age = 33;
age = age + 1;
console.log(age); 
