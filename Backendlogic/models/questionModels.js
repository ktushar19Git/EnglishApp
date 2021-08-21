const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//autoIncrement = require('mongoose-auto-increment');

const QuestionSchema = new Schema({
    
    LevelId:{
        type:Number,
        required:true,

    },
    SubjectId:{
        type: Schema.Types.ObjectID,
        ref:'Subject',
        required:true,

    },
    ChapterId:{
        type: Schema.Types.ObjectID,
        ref:'Chapter1',
        required:true,

    },
    QuestionTypeId:{
        type:Number,
        required:true,

    },
    QuestionName:{
        type:String,
        required:true
    },
    Options:[
        {
            OptionText:{
                type:String,
                required:true
            },
            IsOptionCorrect:{
                type:Boolean,
                required:true
            },

        }
    ],  
    AnswerGuidance:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }, 
});


const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;