require('dotenv').config()
const express = require('express');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const UserRouter = express.Router();

// register route
UserRouter.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(user);
        const hash = await bcrypt.hash(password, saltRounds);
        const user = await UserModel.create({ email, password: hash });
        res.status(200).json({ msg: 'Signup success', user })
    } catch (err) {
        console.log(err.message);
        res.status(400).json(err)
    }
})

// login route
UserRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userDoc = await UserModel.findOne({ email });
        const passOk = await bcrypt.compare(password, userDoc.password)
        // console.log('passOk >> ', passOk)
        if(passOk){
            // logged in success
            // create access token
            const accessToken=await jwt.sign({email,userId:userDoc._id},process.env.SECRET_KEY,{ expiresIn: 60 * 10 })
            res.status(200).cookie('token',accessToken).json({id:userDoc._id,email})
        }else{
res.status(400).json({msg: 'Wrong credentials!'})
        }
        
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: 'Something went wrong' })
    }
})

// sending profile info
UserRouter.get('/profile',async(req,res)=>{
    const {token}=req.cookies;
    console.log('token >> ', token)
    try{
        const decoded=await jwt.verify(token,process.env.SECRET_KEY);
        console.log('decoded >> ',decoded)
res.json(decoded)
    }catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: 'Something went wrong' })
    }
});

// Logout
UserRouter.post('/logout',async(req,res)=>{
    try{
res.cookie('token','').json('ok')
    }catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: 'Something went wrong' })
    }
});



module.exports = UserRouter