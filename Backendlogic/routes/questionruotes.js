const express = require("express")
const {request, response} = require("express")
const questionRouter = express.Router()
const questionModel = require("../models/questionModels")
const chapterModel1=require("../models/chapterModels1")

const {mongoose} = require("mongoose")

questionRouter.get("/",(request,response) =>{
    response.send("This is a root event with response with Nodemon");
});

questionRouter.post('/Question', async (request, response)=>{
    //const saltPassword = await bcrypt.genSalt(10)
    //const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    console.log(request.body);
/*
    var expArr = [];
    request.body.options.exp.forEach(function(eachObj){
   var obj = {
      "description": eachObj.description,
      "value": eachObj.value,
      "percentage": eachObj.percentage
   }
   expArr.push(obj);
});
*/

    var FormOptions=[];

    console.log("Options count:"+request.body.Options.length);

    for(var i=0; i<request.body.Options.length; i++)
    {
        console.log("Inside form Array"+request.body.Options.length);
        const newOption = 
            {
                OptionText:request.body.Options[i].OptionText,
                IsOptionCorrect:request.body.Options[i].isCorrectOption
            }
        
        FormOptions.push(newOption);
    }

    console.log("Arrey Object"+FormOptions);

    const question = new questionModel({
        LevelId:request.body.LevelId,
        SubjectId:request.body.SubjectId,
        ChapterId:request.body.ChapterId,
        QuestionTypeId:request.body.QuestionTypeId,
        QuestionName:request.body.QuestionName,

        Options:FormOptions,
        /*
        Options:[
            {
                OptionText:request.body.Options[0].OptionText,
                IsOptionCorrect:request.body.Options[0].isCorrectOption,
            }
        ],
        */
        AnswerGuidance:request.body.AnswerGuidance,
        
    })
    console.log(question);
    question.save()
    .then(data =>{
        console.log("Success" +data);
        response.json(data);
    })      
    .catch(error =>{
        console.log("Inside Error block"+error)
        response.json(error)
    })
    
})

//Get All Details
questionRouter.get('/Question', async (request, response) =>{
    console.log("Inside Question Get")  
   // console.log(request.params.ChapterId);  
    
    questionModel.find()
     /*chapterModel.aggregate([
        {
            $lookup: {
                from: "questions",
                localField: "_id",
                foreignField: "ChapterId",
                as: "Questions"
            },
        },
        
    ])*/
   
    .then(data =>{
        console.log(data)
        response.json(data)
        //response.jason("This is a Question Data")
    })
    .catch(error =>{
        console.log("This is inside Error block")
        response.json(error)
    })


})

questionRouter.get('/Question/:ChapterId', async (request, response) =>{
    console.log(request.params.ChapterId)
    //const query=request.params.ChapterId
    questionModel.find({ChapterId:request.params.ChapterId},function(err,data){
        if(err) response.sendStatus(500).send(err)
        response.json(data)
        console.log(data);
    })

    .catch(err =>{
        console.log("This is inside Error block")
        response.json(err)
    })
})

module.exports = questionRouter 

