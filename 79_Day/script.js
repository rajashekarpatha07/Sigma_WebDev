console.log("Hello Try and Catch...!");

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("You cannot add strings...!");
}

sum = parseInt(a) + parseInt(b);

function main() {
  try {
    console.log("The sum is", sum * x);
  } catch (error) {
    console.log("Sorry its an error x is not defind");
    return true;
  } finally {
    console.log("all the files are being closed and db is being closed...!");
    return false
  }
}

let c = main();
console.log(a)
