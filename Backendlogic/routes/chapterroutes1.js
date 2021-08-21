const express = require("express")
const { request, response } = require("express")
const chapterRouter1 = express.Router()
const chapterModel1 = require("../models/chapterModels1")
const subjectModel = require("../models/subjectModels")

const { mongoose } = require("mongoose")


chapterRouter1.post('/Chapter1', async (request, response) => {
    const chapter = new chapterModel1({
        subjectId: request.body.SubjectId,
        ChapterName: request.body.ChapterName
    })
    console.log(chapter);
    chapter.save()
        .then(data => {
            console.log("Success" + data);
            response.json(data);
        })
        .catch(error => {
            console.log("Inside Error block" + error)
            response.json(error)
        })
});
//Get all details
chapterRouter1.get('/Chapter1', async (request, response,) => {
    console.log("Inside Chapter Get")
    subjectModel.aggregate([
        {
            $lookup: {
                from: "chapter1",
                localField: "_id",
                foreignField: "subjectId",
                as: "chapters"
            }
        },
        
    ])
        .then(data => {
            console.log(data)
            response.json(data)
        })
        .catch(error => {
            console.log("This is inside Error block")
            response.json(error)
        })
})

module.exports = chapterRouter1