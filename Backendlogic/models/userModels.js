const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const { request } = require('express');

const UserSchema = new Schema({

    RegisterUserName:{
        type:String,
        required:[true,"cannot be blank"],
        unique:true,
        lowercase:true
    },
     RegisterPassword:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false

    }
});

 UserSchema.pre('save',function(next){
    var user=this;
    if(!user.isModified('RegisterPassword'))
    return next();
    bcrypt.genSalt(10,function(err,salt){
        if(err)return next(err);
        bcrypt.hash(user.RegisterPassword,salt,function(err,hash){
            if(err)return next(err);
            user.RegisterPassword=hash;
            next();
        })
    })
})

UserSchema.methods.matchPassword=async function(LoginPassword){
    return await bcrypt.compare(LoginPassword,this.RegisterPassword);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;