require('dotenv').config()
const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const uploadMiddleware = multer({ dest: 'uploads/' })
const fs = require('fs');
const BlogModel = require('../models/blog.model');

const BlogRouter = express.Router();

// create post blog
BlogRouter.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    try {
        const { token } = req.cookies;
        const { originalname, path } = req.file;
        const { title, summary, content } = req.body;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext
        fs.renameSync(path, newPath)
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        const blog = await BlogModel.create({
            title,
            summary,
            content,
            cover: newPath,
            author: decoded.userId
        })
        res.status(200).json(blog)
    } catch (err) {
        console.log(err.message);
        res.status(400).json(err)
    }
})

// get blogs
BlogRouter.get('/post', async (req, res) => {
    const { token } = req.cookies;
    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        res.status(200).json(await BlogModel.find()
            .populate('author', ['email'])
            .sort({ createdAt: -1 }))
    } catch (err) {
        console.log(err.message);
        res.status(400).json(err)
    }
});

// get blog by id
BlogRouter.get('/post/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const postDoc = await BlogModel.findById(id).populate('author', ['email'])
        res.json(postDoc)
    } catch (err) {
        console.log(err.message);
        res.status(400).json(err)
    }
})

module.exports = BlogRouter;