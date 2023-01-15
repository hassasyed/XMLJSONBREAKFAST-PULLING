const mongoose=require('mongoose')


const PostSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{

    type:String,
    required:true
    },
    calories:{
        type:Number,
        required:true
    }

})
const Post1=mongoose.model('Break',PostSchema)
module.exports=Post1