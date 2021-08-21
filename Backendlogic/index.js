const express = require("express");

const app = express();


const mongoose = require('mongoose') 
const cors = require('cors')

//for sceurity reason we are using dotenv 
//when we add connection link of mongodb its show password in link
const dotenv = require('dotenv')
dotenv.config()
//conection to mongoDB
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected for Cleverly English"))

//To pass a bodypasser to help incoming and outgoing request
app.use(express.json())
app.use(cors())






app.listen(4000,()=>console.log("Listening to 4000"))

//1st argument base path and second url is routeurls
const questionRoutes = require('./routes/questionruotes')
app.use('/app', questionRoutes)

//1st argument base path and second url is routeurls
const subjectRoutes = require('./routes/subjectruotes')
app.use('/app', subjectRoutes)

const userRoutes = require('./routes/userroutes')
app.use('/app', userRoutes)

const chapterRoutes1 = require('./routes/chapterroutes1')
app.use('/app', chapterRoutes1)

/*
app.get("/",(request,response) =>{
    response.send("This is a root event with response with Nodemon");
});

app.get("/method",(request,response) =>{
    response.send("This is a method event with response with Nodemon");
});
*/

