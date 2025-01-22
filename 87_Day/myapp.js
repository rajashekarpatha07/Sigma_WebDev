const { error } = require('console');
const fs = require('fs');

console.log("Starting...!");


fs.writeFile("file.txt", "hello it is a file that is craeted by me",()=>{
    console.log("Writing file is done");
    console.log("Now reading file.txt....!")
    fs.readFile("file.txt", (error, data)=>{
        console.log(error, data.toString())
    })
});

fs.appendFile("file.txt", "This is a new file",(error, data)=>{
    console.log("File is appended");
    console.log(data)

})

console.log("Ending")

