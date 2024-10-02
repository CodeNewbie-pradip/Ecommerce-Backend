const mongoose=require("mongoose");

const ownerSchema=mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    isAdmin:Boolean,
    product:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String
});

module.exports=mongoose.model("user", ownerSchema);