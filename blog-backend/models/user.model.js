const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    email: {type:String,required:true,min:6},
    password:{type:String,required:true}
});

const UserModel=mongoose.model('user',UserSchema);

module.exports=UserModel;