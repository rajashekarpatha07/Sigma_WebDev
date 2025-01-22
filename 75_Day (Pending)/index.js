// This line is executed first because JavaScript runs code synchronously, line by line.
console.log("Its is the frist line excution");

// This line is executed next in sequence.
console.log("It is the second line excution");

// This sets a timer to execute the callback function after 2 seconds (2000 milliseconds).
// However, this does not block the execution of the remaining code.
setTimeout(() => {
   console.log("It is excuted after 2seconds");
}, 2000);

// This sets another timer, but it executes the callback function after 1 second (1000 milliseconds).
// Even though this line appears after the 2-second timer, it will execute first due to the shorter delay.
setTimeout(() => {
    console.log("It is excuted after 1 second");
}, 1000);

// This line is executed immediately, before the timers, because it's synchronous.
console.log("It is exuted before the above two");
