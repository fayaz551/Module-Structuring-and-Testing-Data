## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

this tells that  function’s name is log, in this case - console.log



Now enter just `console` in the Console, what output do you get back?
This prints the entire console object with all its methods, like log, warn, error, etc.
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
assert
: 
ƒ assert()
clear
: 
ƒ clear()
context
: 
ƒ context()
count
: 
ƒ count()
countReset
: 
ƒ countReset()
createTask
: 
ƒ createTask()
debug
: 
ƒ debug()
dir
: 
ƒ dir()
dirxml
: 
ƒ dirxml()
error
: 
ƒ error()
group
: 
ƒ group()
groupCollapsed
: 
ƒ groupCollapsed()
groupEnd
: 
ƒ groupEnd()
info
: 
ƒ info()
log
: 
ƒ log()
memory
: 
MemoryInfo {totalJSHeapSize: 54442408, usedJSHeapSize: 52085668, jsHeapSizeLimit: 4294967296}
profile
: 
ƒ profile()
profileEnd
: 
ƒ profileEnd()
table
: 
ƒ table()
time
: 
ƒ time()
timeEnd
: 
ƒ timeEnd()
timeLog
: 
ƒ timeLog()
timeStamp
: 
ƒ timeStamp()
trace
: 
ƒ trace()
warn
: 
ƒ warn()

Try also entering `typeof console`
This prints 'Object'.


Answer the following questions:

What does `console` store?
Answer: console is an object that stores functions you can call to inspect values, debug code, and print information.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console is a built‑in object provided by the browser or Node.js. It contains many debugging functions.
The dot (.) is the property access operator. It means go inside this object and get the property or method with this name.




