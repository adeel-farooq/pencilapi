const mongoose  = require("mongoose");

const QuestionModel = mongoose.model("Question")



exports.getQuestions = async (req,res)=>{
    QuestionModel.find((err,docs)=>{
    
if(!err){

    res.status(200).json({ message: 'Records SuccessFully Found', hasError: false,items:docs });
}else{
    res.status(200).json({ message: 'No Recode', hasError: true,items:docs });
}
    })

}

exports.postQuestion= async (req,res)=>{
    const {Question}= req.body;
    let question = new QuestionModel();
    question.Question=Question;
  const dbQuestion=await  question.save()
//   console.log(dbQuestion);
if(dbQuestion){
    res.status(200).json({ message: 'SuccessFully Created', hasError: false,item:dbQuestion });
}else{
    res.status(200).json({ message: 'Not Create', hasError: true,item:dbQuestion });
}

}