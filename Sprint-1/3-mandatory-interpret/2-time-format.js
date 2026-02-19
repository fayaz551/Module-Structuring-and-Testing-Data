const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program.

// b) How many function calls are there?
// There is 1 function call in this program, which is console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60. In this context, it is used to determine the number of seconds that are left after accounting for the full minutes in the movie length. Since there are 60 seconds in a minute, using the modulus operator (%) with 60 gives us the remaining seconds that do not make up a full minute. For example, if movieLength is 8784 seconds, then 8784 % 60 would give us the number of seconds remaining after dividing 8784 by 60, which is 24 seconds.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes is calculating the total number of minutes in the movie length. It does this by first subtracting the remaining seconds (calculated in the previous line) from the total movie length in seconds, which gives us the total number of seconds that are part of complete minutes. Then, it divides that result by 60 to convert the total seconds into minutes. For example, if movieLength is 8784 seconds and remainingSeconds is 24 seconds, then (8784 - 24) / 60 would give us the total number of minutes in the movie, which is 146 minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string that shows the length of the movie in hours, minutes, and seconds. A better name for this variable could be formattedMovieLength or movieDurationFormatted, as it more clearly indicates that it is a formatted representation of the movie length.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code will work for all non-negative integer values of movieLength, as it is designed to convert a length in seconds into a format of hours, minutes, and seconds. However, if movieLength is a negative value, the calculations may not make sense in the context of a movie length, and the output may not be meaningful.