require('dotenv').config()
const express = require('express');
const cors=require('cors');
const UserRouter = require('./routes/user.routes');
const connectDB = require('./config/db');

const app = express();

app.use(cors());

connectDB();

app.use(express.json());

app.use('/api',UserRouter);

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


// mongodb+srv://guptakishan1123:3krRs6sF3rKKOHVI@cluster0.kkqlxqz.mongodb.net/todoDB