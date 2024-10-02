const express=require("express");
const router=express.Router();
const ownerModel=require("../models/owners_model");

if (process.env.NODE_ENV === "development") {
    console.log("The application is running in development mode.");
} else {
    console.log("The application is not running in development mode.");
}


if(process.env.NODE_ENV==="development"){
    router.post("/create", async function(req, res){

        let owners=await ownerModel.find();
        if(owners.length>0){
            return res
            .status(503)
            .send("you dont have permission to create a new owners.");
        }

        let {fullname, email, password}=req.body;
        let createdOwner=await ownerModel.create({
            fullname,
            email,
            password
        })
        res
        .status(201)
        .send(createdOwner);
    })
}

router.get("/", function(req, res){
    res.send("hey, it's owners router");
})

module.exports=router;