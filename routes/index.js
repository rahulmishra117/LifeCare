const express=require('express');

const router=express.Router();
console.log('router is loaded');

router.use('/login',require('./log'));

module.exports=router;