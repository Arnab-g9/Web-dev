const express = require('express')
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModal = require("./models/post.model")
const cors = require("cors")

const app = express();


app.use(express.json()); // middleware for reading raw data
app.use(cors());
const upload = multer({storage: multer.memoryStorage()}); // middleware for reading the form data or files

app.post('/create-post', upload.single("image"), async (req, res)=>{
    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer);

    console.log("result >>>",result);

    const post = await postModal.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})

app.get("/posts", async(req, res)=>{
    const posts = await postModal.find();
    return res.status(200).json({
        message: "Post fetched successfully",
        posts
    })
})

module.exports = app;