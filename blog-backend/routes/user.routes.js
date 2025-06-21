const express = require('express');
const UserModel = require('../models/user.model');

const UserRouter = express.Router();

UserRouter.post('/signup', async (req, res) => {
    try {
        // const user = req.body;
        // console.log(user);
        const user=await UserModel.create(req.body);
        res.status(200).json({ msg: 'Signup success', user })
    }catch(err){
        console.log(err.message);
        res.status(500).json({msg: 'Something went wrong'})
    }
})

module.exports = UserRouter