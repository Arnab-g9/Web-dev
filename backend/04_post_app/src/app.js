const express = require('express')
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const app = express();


app.use(express.json()); // middleware for reading raw data
const upload = multer({storage: multer.memoryStorage()}); // middleware for reading the form data or files

app.post('/create-post', upload.single("image"), async (req, res)=>{
    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer);

    console.log("result >>>",result);
})

module.exports = app;