const express = require('express');
const multer  = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' })

const BlogRouter=express.Router();

// post blog
BlogRouter.post('/post',uploadMiddleware.single('file'), async(req,res)=>{
    try{
res.json({files:req.file})
    }catch (err) {
        console.log(err.message);
        res.status(400).json(err)
    }
})

module.exports=BlogRouter;