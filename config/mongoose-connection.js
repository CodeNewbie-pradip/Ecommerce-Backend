const mongoose = require("mongoose");
const dbgr=require("debug")("development:mongoose");
const config=require("config")

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    dbgr("db connected");
}).catch(function(err){
    console.log(err);
})

module.exports=mongoose.connection;