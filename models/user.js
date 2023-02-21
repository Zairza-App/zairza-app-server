const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    registration_number: {
        type: String,
        required: true
    },
    branch: {
        type: String
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    zairza_id: {
        type: String
    },
    skills: [{
        type: String
    }],
    projects: [{
        name: {
            type: String
        },
        github: {
            type: String
        },
        hosted_link: {
            type: String
        },
        tech_stack: [{
            type: String
        }],
        description: {
            type: String
        }
    }],
    key_possession: {
        type: Boolean
    },
    batch: {
        type: String
    },
    blogs: [{
        description: {
            type: String
        },
        title: {
            type: String
        },
        link: {
            type: String
        }
    }],
    social_handles: [{
        name: {
            type: String
        },
        link: {
            type: String
        }
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;