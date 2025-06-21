const express = require('express');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserRouter = express.Router();

UserRouter.post('/signup', async (req, res) => {
    try {
        const {email,password} = req.body;
        // console.log(user);
         const hash = await bcrypt.hash(password, saltRounds);
        const user=await UserModel.create({email,password:hash});
        res.status(200).json({ msg: 'Signup success', user })
    }catch(err){
        console.log(err.message);
        res.status(500).json({msg: 'Something went wrong'})
    }
})

module.exports = UserRouter