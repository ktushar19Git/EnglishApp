const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//autoIncrement = require('mongoose-auto-increment');

const SubjectSchema = new Schema({
    
    
    Subject:{
        type:String,
        required:true,

    },
    
    date:{
        type:Date,
        default:Date.now
    }, 
});


const Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;