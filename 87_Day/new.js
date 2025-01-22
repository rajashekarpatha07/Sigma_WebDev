import fs from "fs/promises"
console.log("Hello world...!");

let a = await fs.readFile("file.txt")
let c = await fs.appendFile("file.txt", "\n its a new line appended using append function..!");
// let b = await fs.writeFile('file.txt', "\n\n\n\n\n\n\n\n\ it is new line that is created using fs module and promises...!");
console.log(a.toString);