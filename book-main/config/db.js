const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27019/book-store');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})