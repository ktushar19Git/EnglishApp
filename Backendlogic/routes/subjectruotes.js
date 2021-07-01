const express = require("express")
const {request, response} = require("express")
const subjectRouter = express.Router()
const subjectModel = require("../models/subjectModels")

const {mongoose} = require("mongoose")



subjectRouter.post('/Subject', async (request, response)=>{
    //const saltPassword = await bcrypt.genSalt(10)
    //const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    console.log(request.body);


    

    

    const subject = new subjectModel({
        Subject:request.body.Subject,
        })

    console.log(subject);
    subject.save()
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
subjectRouter.get('/Subject', async (request, response) =>{
    console.log("Inside Subject Get")    
    subjectModel.find()
    .then(data =>{
        console.log(data)
        response.json(data)
        //response.jason("This is a subject Data")
    })
    .catch(error =>{
        console.log("This is inside Error block")
        response.json(error)
    })
})

module.exports = subjectRouter 

