const express = require('express');
const app = express()
const port = 3000;
app.get('/',(req,res)=>{
    res.send("Hello world")
});
app.post('/',(req,res)=>{
    console.log("Hey it is a post request")
    res.send("Hello world it is a post request");

})

app.post('/index', (req,res)=>{
    res.sendFile('tamplets/index.html', {root:__})
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

