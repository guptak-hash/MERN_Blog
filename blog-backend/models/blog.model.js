const mongoose=require('mongoose');

const BlogSchema=new mongoose.Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,
    author:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
},{
    timestamps:true
});

const BlogModel=mongoose.model('blog',BlogSchema)

module.exports=BlogModel;