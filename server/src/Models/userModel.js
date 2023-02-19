const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    displayName: {
            type:String, 
            required:true,
            trim:true
        },
        email: {
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        phoneNumber: {
            type:Number, 
            trim:true
        },
        photoURL:{
            type:String, 
            trim:true
        },
        uid:{
            type:String, 
            required:true,
            trim:true
        }
    
        
},{timestamps:true})


module.exports = mongoose.model("user", userSchema)