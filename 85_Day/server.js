console.log("Hello world....!");
let slugify = require('slugify');

let a = slugify("some string");

console.log(a);

let b = slugify("Some string U$$$%","-");
console.log(b)