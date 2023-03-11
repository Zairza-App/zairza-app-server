const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    wing: {
        type: String,
        enum: ['Hardware', 'Software', 'Design'],
        required: true
    },
    skills: {
        type: [String],
        required: true
    }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
