// Conditional Statement Tutorial
console.log("This is a tutorial on conditional statements and operators!");

// Variables
let age = 15;
let grace = 3;

// Arithmetic Operators
console.log("Arithmetic Operators:");
console.log("Addition:", age + grace); // Adds age and grace
console.log("Subtraction:", age - grace); // Subtracts grace from age
console.log("Multiplication:", age * grace); // Multiplies age and grace
console.log("Division:", age / grace); // Divides age by grace
console.log("Exponentiation:", age ** grace); // Raises age to the power of grace
console.log("Modulus (Remainder):", age % grace); // Finds the remainder of age divided by grace

// Conditional Statement
if ((age + grace) >= 18) {
    console.log("You can drive"); // Executes if the sum of age and grace is 18 or more
} else {
    console.log("You can't drive"); // Executes otherwise
}

// Comparison Operators
let a = 10;
let b = 20;
let c = 10;
let d = "10";

console.log("\nComparison Operators:");
if (a == b) {
    console.log("a is equal to b (value comparison)");
} else {
    console.log("a is not equal to b (value comparison)");
}

if (c === d) {
    console.log("c is strictly equal to d (type and value match)");
} else {
    console.log("c is not strictly equal to d (type or value mismatch)");
}

// Logical Operators
let x = 10;
let y = 20;

console.log("\nLogical Operators:");
if (x > 10 && y < 20) {
    console.log("Both conditions are true: x > 10 and y < 20");
} else {
    console.log("At least one condition is false: x > 10 and y < 20");
}

if (x > 10 || y < 20) {
    console.log("At least one condition is true: x > 10 or y < 20");
} else {
    console.log("Both conditions are false: x > 10 or y < 20");
}

// Nested Conditional Statement
if (a >= 18) {
    console.log("You can drive"); // Executes if a is 18 or more
} else if (age == 0) {
    console.log("Are you kidding?"); // Executes if age is 0
} else {
    console.log("You can't drive"); // Executes if both conditions above fail
}
