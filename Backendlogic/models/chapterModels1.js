const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//autoIncrement = require('mongoose-auto-increment');

const ChapterSchema1 = new Schema({

    subjectId: {
        type: Schema.Types.ObjectID,
        ref:'Subject',
        required: true,
    },
    ChapterName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});


const Chapter1 = mongoose.model('Chapter1', ChapterSchema1);

module.exports = Chapter1;