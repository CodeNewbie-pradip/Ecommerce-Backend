const { default: mongoose } = require("mongoose");

mongoose.connect("mongoodb://127.0.0.1:27017/scatch")
.then(function(){
    console.log("db connected");
}).catch(function(err){
    console.log(err);
})

module.exports-mongoose.connection;