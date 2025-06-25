// blog-backend\routes\blog.routes.js
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
    // const { token } = req.cookies;
    try {
        // const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        const blogs=await BlogModel.find()
            .populate('author', ['email'])
            .sort({ createdAt: -1 });
            // console.log('blogs >> ', blogs)
        res.status(200).json(blogs)
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
});

// edit post
BlogRouter.put('/post', uploadMiddleware.single('file'), async (req, res) => {
    try {
        const { token } = req.cookies;
        const {id, title, summary, content } = req.body;
        let newPath = null;
        if (req.file) {
            const { originalname, path } = req.file;
            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            newPath = path + '.' + ext
            fs.renameSync(path, newPath)
        }
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        console.log('decoded >> ',decoded)
        const postDoc=await BlogModel.findById(id);
        const isAuthor= JSON.stringify(postDoc.author)===JSON.stringify(decoded.userId);
        if(!isAuthor){
            return res.status(400).json('Invalid author!')
        }
        postDoc.title = title;
        postDoc.summary = summary;
        postDoc.content = content;
        if (newPath) {
            postDoc.cover = newPath;
        }
        await postDoc.save();
        res.json(postDoc)
    } catch (err) {
        console.log(err.message);
        res.status(400).json(err)
    }
})

module.exports = BlogRouter;