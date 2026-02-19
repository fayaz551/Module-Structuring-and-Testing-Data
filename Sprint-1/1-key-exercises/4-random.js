const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// minimum is 1, maximum is 100

// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). So it can be any value from 0 up to but not including 1.
// (maximum - minimum + 1) calculates the range of possible values, which is 100 - 1 + 1 = 100. This means we want to generate a random number between 0 and 99 (inclusive) before adding the minimum value.
// Math.random() * (maximum - minimum + 1) gives us a random decimal number between 0 (inclusive) and 100 (exclusive). This means it can be any value from 0 up to but not including 100.
// Math.floor() takes the random decimal number and rounds it down to the nearest whole number. This means we will get an integer value between 0 and 99 (inclusive).
// Finally, we add the minimum value (1) to the result, which shifts the range from 0-99 to 1-100. So num will be a random integer between 1 and 100 (inclusive).