## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
function defination


Now enter just `console` in the Console, what output do you get back?
This prints the entire console object with all its methods, like log, warn, error, etc.

Try also entering `typeof console`
This prints the entire console object with all its methods, like log, warn, error, etc.

Answer the following questions:

What does `console` store?
object
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log("Hello")  calls the log method to print something to the console.

console.assert(condition, "Message")  calls the assert method to check a condition, and only prints the message if the condition is false.
