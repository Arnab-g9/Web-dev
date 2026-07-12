const express = require('express');

const app = express(); //craete an instance of express. server creation


app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get("/about", (req, res)=>{
    res.send("About Page");
})

app.listen(3000, ()=>{
    console.log('server running on port 3000');
}) // server started and listening on port 3000