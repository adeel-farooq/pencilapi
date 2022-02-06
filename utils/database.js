const mongoose = require('mongoose')

mongoose.Promise = global.Promise
// const mongoConnection =`mongodb://localhost:27017/pencil` 
const mongoConnection ="mongodb+srv://pencil:pencil123@cluster0.ila2z.mongodb.net/pencil"
mongoose.connect(mongoConnection, { useNewUrlParser: true }, (error)=>{
    if(!error){
        console.log('success');
    }else{
        console.error(error);
    }
} )
const Question =require("../model/question")