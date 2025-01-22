const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define the operations
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

// Ask the questions in sequence
rl.question("Enter the number 1: ", (number1) => {
  const a = parseFloat(number1); // Convert input to number

  rl.question("Enter the number 2: ", (number2) => {
    const b = parseFloat(number2); // Convert input to number

    rl.question("Enter your operation (+, -, *, /): ", (operation) => {
      let result;
      if (operation === '+') {
        result = sum(a, b);
        console.log(`The sum of ${a} and ${b} is ${result}`);
      } else if (operation === '-') {
        result = sub(a, b);
        console.log(`The difference of ${a} and ${b} is ${result}`);
      } else if (operation === '*') {
        result = mul(a, b);
        console.log(`The product of ${a} and ${b} is ${result}`);
      } else if (operation === '/') {
        result = div(a, b);
        console.log(`The quotient of ${a} and ${b} is ${result}`);
      } else {
        console.log("Invalid operation entered.");
      }
      rl.close(); // Close the input stream
    });
  });
});
