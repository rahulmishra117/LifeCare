const express=require('express');

const router=express.Router();

const logincontroller=require('../controller/login');

router.get('/login',logincontroller.login);

module.exports=router;