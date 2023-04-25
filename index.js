const express=require('express');

const app=express();

app.get('/success',(req,res)=>{
    res.send("Payment is successfull")
})

app.listen(4000,(req,res)=>{
    console.log("Server is running")
})