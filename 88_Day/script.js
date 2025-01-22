const express = require('express');
const { userInfo } = require('os');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// This will capture the route parameter and query parameters
app.get('/search/:parameters', (req, res) => {
    console.log('Route Parameter:', req.params.parameters);  // Logs the route parameter
    console.log('Query Parameters:', req.query);  // Logs the query parameters
    
    res.send('Search results');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// app.get('/about', (req, res) => {
//     res.send('It is about section!');
// });

// app.get('/contactus', (req, res) => {
//     res.send('It is contact us section');
// });

// app.get('/projects/project1', (req, res) => {
//     res.send('It is first project section..!');
// });

// app.get('/projects', (req, res) => {

//     res.send('Projects section');
// });

// app.get('/projects/:firstendpoint', (req, res) => {
//     res.send(`Hello ${req.params.firstendpoint}`);
    
// });

