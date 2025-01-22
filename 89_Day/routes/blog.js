const express = require('express');
const router = express.Router();
const blog = require('./routes/blog')

app.use()


router.get('/blogpost/:solug', (req,res)=>{
    res.send("It is a blog endpoint for "+ req.params.solug);
})

module.exports = router;
