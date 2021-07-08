const mongoose=require("mongoose");
const BookAptiSchema=mongoose.Schema({
    date:{
        type:date,
        required:true,
    },
    time:{
        type:String,
        required:true
    }
    ,
    day:{
        type:String,
        required:true
    },
    user:{
        ref:User
    }

})

const BookApi=mongoose.model("Book",BookAptiSchema);
module.exports=BookApi;