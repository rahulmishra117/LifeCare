const { pass } = require('../config/mongoose');
const User=require('../models/user');
module.exports.create=function(req,res)
{
    // console.log("req.body"+req.body);
    console.log(req.body);
    if (req.body.password != req.body.Confirm_password){
        console.log("password not match")
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return;}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return;}

                return res.redirect('/paths/SignUp');
            })
        }else{
            return res.redirect('/paths/Login');
        }

    });

}