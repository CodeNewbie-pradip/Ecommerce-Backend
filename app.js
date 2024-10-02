const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const path=require("path");

const ownersRouter=require("./routes/ownersRoutes");
const usersRouter=require("./routes/usersRoutes");
const productsRouter=require("./routes/productsRoutes");

const db=require("./config/mongoose-connection")


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");

app.use("/users", usersRouter);
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);

app.listen(3003)//, ()=>{
    //console.log("server is running on port 3000")
//});