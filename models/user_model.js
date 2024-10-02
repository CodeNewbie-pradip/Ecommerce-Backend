const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    fullname:String,
    email:String,
    password:String,
    cart:{
        type:Array, 
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    orders:{
        type:Array,
        default:[]
    },
    contact:{
        type:String,
        required:true
    },
    picture:String
});

module.exports=mongoose.model("User", userSchema);