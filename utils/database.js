const mongoose = require('mongoose')

mongoose.Promise = global.Promise
// const mongoConnection =`mongodb://localhost:27017/pencil` 
const mongoConnection ="mongodb+srv://mongodb:pencil123@cluster0.9uee2.mongodb.net/pencil?retryWrites=true&w=majority"
mongoose.connect(mongoConnection, { useNewUrlParser: true }, (error)=>{
    if(!error){
        console.log('success');
    }else{
        console.error(error);
    }
} )
const Question =require("../model/question")