function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// When formatTimeDisplay is called, the pad function will be called three times: once for totalHours, once for remainingMinutes, and once for remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// When pad is called for the first time, the value assigned to num is 0, which is the value of totalHours calculated from the input of 61 seconds.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when called for the first time is "00", because pad(0) returns "00" after padding 0 with leading zeros to make it 2 digits.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// When pad is called for the last time, the value assigned to num is 1, which is the value of remainingSeconds calculated from the input of 61 seconds.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value assigned to num when pad is called for the last time in this program is "01", because pad(1) returns "01" after padding 1 with a leading zero to make it 2 digits.