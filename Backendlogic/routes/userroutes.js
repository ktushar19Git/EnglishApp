const express = require("express")
const userRouter = express.Router()
const userModel = require('../models/userModels')
const bcrypt = require('bcryptjs')
const { request, response } = require("express")
const { mongoose } = require("mongoose")

//Registration
userRouter.post('/register', async (request, response) => {
    const user = new userModel({
        RegisterUserName: request.body.RegisterUserName,
        RegisterPassword: request.body.RegisterPassword,
    })
    console.log(user);
    await user.save()
        .then(data => {
            response.sendStatus(200);
            console.log(data)
        })
        .catch(err => {
            response.status(400).send("failed to store to database")
        });
});

//Login
userRouter.post('/login', async (request, response,next) => {
       userModel.findOne({ RegisterUserName: request.body.LoginUserName })
        .then(user => {
            console.log("User from login", user)
            if (!user)
                response.sendStatus(200);
           else {
                bcrypt.compare(request.body.LoginPassword, user.RegisterPassword, function (err, result) {
                    //console.log(request.body.LoginPassword);
                    //console.log(user.RegisterPassword);
                    if (err) { throw new Error(err) }
                    if (result) {
                        console.log("login successful");
                        return response.status(200);
                    } else {
                        console.log("password didn't match");
                        return response.status(204);
                    }
                })
            }
        }) 
});

//validation
userRouter.post('/validate', async (request, response) => {
    userModel.findOne({ RegisterUserName: request.body.RegisterUserName })
        .then(user => user ? response.sendStatus(204) : response.sendStatus(200), console.log("user already exists"))
});

userRouter.get('/register', async (request, response) => {
    userModel.find()
        .then(data => {
            console.log(data)
            response.json(data)
            //response.sendStatus(200)
        })
        .catch(error => {
            response.json(error)
        })
})

module.exports = userRouter;