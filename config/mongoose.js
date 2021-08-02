const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://Rahul:rahul@mycluster0.v5bvh.mongodb.net/Todo_app?retryWrites=true&w=majority', { useCreateIndex: true });


const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;