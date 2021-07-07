const express=require('express');
const app=express();
const port=9000;
const db = require('./config/mongoose');


app.listen(port,function (err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Port is working in the current Server${port}`);
})