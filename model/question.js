const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    Question:{
        type:String
    },
    // _id:{
    //     type:String
    // },

})
mongoose.model("Question",QuestionSchema)