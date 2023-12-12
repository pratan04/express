
const express =require("express");
const app=express();

app.get("/",function(req,res){
    res.send("<h1>hello</h1>");
    
})

app.get("/contact",function(req,res){
    res.send("contact me at www.google.com");
})

app.get("/contact/about",function(req,res){
    res.send("prashant is a meditator");
})

app.get("/hobby",function(req,res){
    res.send("fuck");
})

app.listen(3000,function(){
    console.log("sever 3000");
});