require('dotenv').config()
const express = require('express');
const cors=require('cors');
const UserRouter = require('./routes/user.routes');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const BlogRouter = require('./routes/blog.routes');

const app = express();

app.use(cors({credentials:true,origin:'https://mern-blog-frontend-6gkr.onrender.com'}));

connectDB();

app.use(cookieParser())

app.use('/uploads',express.static(__dirname+'/uploads'));

app.use(express.json());

app.use('/api',UserRouter);

app.use('/api',BlogRouter)

app.use('/test',(req,res)=>{
    try{
        res.status(200).json({msg:'This is test route'})
    }catch(err){
        console.log(err.message)
        res.status(500).json({msg:'Something went wrong'})
    }
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server started at port ', PORT)
})


