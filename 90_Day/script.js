// Importing Express
const express = require('express');
const app = express();
const fs = require('fs');

// Middleware 1
app.use((req, res, next) => {
    const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

    // Append log to logs.txt
    fs.appendFile('logs.txt', logEntry, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });

    console.log('middleware1');
    next(); // Move to the next middleware or route
});

// Route
app.get('/', (req, res) => {
    res.send('Hello from Express with Middleware!');
});

// Start the server

// middleware2
app.use((req,res)=>{
    res.send("It is middleware 2");
    console.log('middleware2');
    next();

})



// Define a port
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
