console.log("Tutorial to strings...!");


let a = "raju";
console.log(a[0]);//we can access the string using index number

console.log(a[5]);//If we try to access the index number which is out of the string length it will return undefined

console.log(a.length)

console.log("Tamplete illterls");

let my_name = "Raju";
let friend = "rohan";
console.log(`my name is ${my_name} and my friend name is ${friend}`) //we can use template literals to insert the variable value inside the string

let hostel = "Ganapathi";

console.log(hostel.toUpperCase());
console.log(hostel.toLowerCase());
console.log(hostel.length)


console.log("Sclicing");
console.log(hostel.slice(2))
console.log(hostel.slice(1,4));

console.log(hostel.replace("Gan", "077"))

console.log(hostel.indexOf("a"))