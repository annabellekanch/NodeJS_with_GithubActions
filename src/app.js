const express = require('express');
const app = express()

app.get("/test", (req, res)=>{
    res.status(200).send("The test endpoint worked!");
});


module.exports = app;