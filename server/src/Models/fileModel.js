const mongoose = require('mongoose')


const fileSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    originalName: {
            type:String, 
            trim:true
        },
        mimetype: {
            type:String,
         
            trim:true
        },
       filename: {
            type:String,
        
            trim:true
        },
        path:{
            type:String, 
          
            trim:true
        },
        size:{
            type:String, 
    
            trim:true
        }
    
        
},{
    toJSON:{
        transform:(doc,ret,options)=>{
            ["path","originalName"].forEach((ele)=> delete ret[ele])
            return ret
        }
    }
})


module.exports = mongoose.model("file", fileSchema)