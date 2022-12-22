const express = require("express")
const https = require("https")
const app = express()

app.get("/",function(req,res){
    res.send("Thank you")
})

app.listen("3000",function(){
    console.log("server is runing")
})